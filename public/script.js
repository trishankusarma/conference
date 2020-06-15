function smoothScroll(target,duration){
  var target=document.querySelector(target);
  var targetPosition=target.getBoundingClientRect().top+window.pageYOffset;
  var startPosition=window.pageYOffset;
  var distance=targetPosition-startPosition;
  var startTime=null;
  function animation(currentTime){
      if(startTime===null)startTime=currentTime;
      var TimeElapsed=currentTime-startTime;
      var run=ease(TimeElapsed,startPosition,distance,duration);
      window.scrollTo(0,run);
      if(TimeElapsed<duration) requestAnimationFrame(animation);
  }
  function ease(t,b,c,d){
      t/=d/2;
      if(t<1)return c/2*t*t+b;
      t--;
      return -c/2*(t*(t-2)-1)+b;
  }
  requestAnimationFrame(animation);
}
const section1=document.querySelector(".section1");
const home=document.querySelector(".home");
const section2=document.querySelector(".section2");
const section3=document.querySelector(".section3");
const section4=document.querySelector(".section4");
const section5=document.querySelector(".section5");
const section6=document.querySelector(".section6");
const section7=document.querySelector(".section7");

section1.addEventListener("click",function(event){
  smoothScroll(".one1",1000);
});
home.addEventListener("click",function(event){
  smoothScroll(".one1",1000);
});
section2.addEventListener("click",function(){
  smoothScroll(".two2",1000);
});
section3.addEventListener("click",function(){
  smoothScroll(".three3",1000);
})
section4.addEventListener("click",function(){
  smoothScroll(".four4",1000);
});
section5.addEventListener("click",function(){
  smoothScroll(".five5",1000);
});
section6.addEventListener("click",function(){
  smoothScroll(".six6",1000);
})
section7.addEventListener("click",function(){
  smoothScroll(".seven7",1000);
})
function getrandomcolor(){
  var letters = '0123456789ABCDEF'.split(''); 
  var color='#';
  for(var i=0;i<6;i++)
  {
    color+=letters[Math.round(Math.random()*15)];
  }
  return color;
}
setInterval(function(){
    document.querySelector("#style").style.backgroundColor=getrandomcolor();
},2000)
