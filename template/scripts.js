monName = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");
now = new Date;
dtTime=monName[now.getMonth()] + "," +now.getDay()+" "+ now.getFullYear();
document.getElementById("dtTime").innerHTML=dtTime;