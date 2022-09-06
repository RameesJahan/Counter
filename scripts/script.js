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
count_btn.addEventListener('click', createRipple);//add ripple effect 


//function for ripple effect


/*

////////////Method 1///////////

function ripple(e){
  
  e = e || window.event;
  
  const diameter = Math.max(e.target.clientWidth, e.target.clientHeight);
  const radius = diameter / 2;
  
  console.log(e.currentTarget.clientWidth + "," + e.currentTarget.clientHeight);
  console.log(radius);
  
  let x = e.clientX - e.currentTarget.offsetLeft;
  let y = e.clientY - e.currentTarget.offsetTop;
   
   console.log(e.clientX + " - " + e.currentTarget.offsetLeft + " = " + x );
   console.log(e.clientY + " - " + e.currentTarget.offsetTop + " = " + y );
   
   let ripples = document.createElement('span');
   ripples.style.left = x + 'px';
   ripples.style.top = y + 'px';
   this.appendChild(ripples);
   
   window.setTimeout(() => {
     ripples.remove();
     console.log('ripples removed')
   },300);
}*/

////////////Method 2///////////

function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${(event.clientX) - button.offsetLeft - radius}px`;
  circle.style.top = `${(event.clientY) - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

