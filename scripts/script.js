var a = 0;
var iptA= document.getElementById("count-ipt");

function count() {
  a++;
  iptA.value = a;
}

function clearAll() {
  a = 0;
  iptA.value = a;
  console.log(iptA.value);
}