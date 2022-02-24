(function () {
  if (!console) {
      console = {};
  }
  var old = console.log;
  var logger = document.getElementById('log');
  console.log = function (message) {
      if (typeof message == 'object') {
          logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
      } else {
          logger.innerHTML += message + '<br />';
      }
  }
})();



function diff_years(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff/365.25));
 }

var x;
x = "0";


dt1 = new Date();
dt2 = new Date(1916,4,24);
console.log(x-diff_years(dt1, dt2));



function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if(hh == 0){
      hh = 12;
  }
  if(hh > 12){
      hh = hh - 12;
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  //document.getElementById("time").innerText = time; 
  let t = setTimeout(function(){ currentTime() }, 1000);
}
currentTime();