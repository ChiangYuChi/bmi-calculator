 //--- 指定 dom----//
 var sendData = document.querySelector('.send');
 var list = document.querySelector('.list');

 // 取出 localstorage裡的資料，有就取值，沒就塞空陣列
 var data = JSON.parse(localStorage.getItem('listData')) || [];



 //--- 監聽與更新 ----//

 // 監聽btn 送出 todo
 sendData.addEventListener('click', addData);




 // 更新列表
 updateList(data);



 //=====加入列表，並同步更新網頁與 localstorage====//
 function addData(e) {
     e.preventDefault();
     var Height = document.querySelector('.howHeight').value;
     var Weight = document.querySelector('.howWeight').value;
     var BMI = Weight / ((Height / 100) * (Height / 100));

     BMI = BMI.toFixed(1);
     var color = '';
     var situation = '';
     var date = new Date();
     var nowDate = date.toDateString();

     if (BMI < 18.5) {
         situation = '小瘦瘦';
         color = 'LightBlue';
     } else if (18.5 <= BMI && BMI < 24) {
         situation = '理想';
         color = 'green';
     } else if (24 <= BMI && BMI < 27) {
         situation = '微胖胖';
         color = 'orange';
     } else if (27 <= BMI && BMI < 30) {
         situation = '有些肥胖';
         color = 'yellow';

     } else if (30 <= BMI) {
         situation = '你是胖子';
         color = 'red';

     } else if (NaN = BMI) {
         situation = '請輸入數據'
         color = 'black';
     }

     var health = {
         content: [color, situation, BMI, Weight, Height, nowDate]
     };
     data.push(health);
     // 更新網頁內容
     updateList(data);
     // 更新localstorage,要存入要轉成string
     localStorage.setItem('listData', JSON.stringify(data));

 }

 function updateList(items) {
     var str = '';
     var len = items.length;
     for (var i = 0; i < len; i++) {
         str += '<li style="border-left: 5px solid ' + items[i].content[0] +
             ';"><span style = "width:100px;margin-left:20px;font-size:20px;font-weight:bold;" > ' +
             items[i].content[1] + '</span><span style="width:100px;margin-left:30px;">BMI' +
             items[i].content[2] + '</span><span style = "width:100px;margin-left:20px;" > 體重 ' +
             items[i].content[3] + 'kg</span><span style = "width:100px;margin-left:30px;" > 身高' +
             items[i].content[4] + 'cm</span> <span style="width:200px;margin-left:80px;">' +
             items[i].content[5] +
             '</span>    </li>';



     };

     list.innerHTML = str;

 }