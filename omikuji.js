var username;
var name;
var userresult;
username = prompt("お名前を入力してください。");

document.getElementById("name").innerHTML = username;
if(username==""){
  document.getElementById("name").innerHTML="名無し";
}
var rand = Math.floor( Math.random() * 5);
if (rand == 0) {
  userresult = "大吉";
}
if (rand == 1) {
  userresult = "中吉";
}
if (rand == 2) {
  userresult = "小吉";
}
if (rand == 3) {
  userresult = "吉";
}
if (rand == 4) {
  userresult = "凶";
}
document.getElementById("result").innerHTML = userresult;