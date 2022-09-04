var a = 0;
var iptA= document.getElementById("count-ipt");
var anim_div = document.getElementById("anim-click");

function count() {
  a++;
  iptA.value = a;
}

function clearAll() {
  a = 0;
  iptA.value = a;
  console.log(iptA.value);
}

var count_btn = document.getElementById("count-btn");
count_btn.addEventListener('click',function(e){
   
   let x = e.clientX - e.target.offsetLeft;
   let y = e.clientY - e.target.offsetTop;
   
   let ripples = document.createElement('span');
   ripples.style.left = x + 'px';
   ripples.style.top = y + 'px';
   this.appendChild(ripples);
   
   window.setTimeout(() => {
     ripples.remove();
     console.log('ripples removed')
   },300);
});