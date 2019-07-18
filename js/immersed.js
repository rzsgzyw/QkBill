(function(w){

document.addEventListener('plusready',function(){
	// console.log("Immersed-UserAgent: "+navigator.userAgent);
},false);

var immersed = 0;
var ms=(/Html5Plus\/.+\s\(.*(Immersed\/(\d+\.?\d*).*)\)/gi).exec(navigator.userAgent);
if(ms&&ms.length>=3){
	immersed=parseFloat(ms[2]);
}
w.immersed=immersed;
if(!immersed){
	return;
}
immersed = immersed;
var t=document.getElementById('header');
height = immersed + 45;
//t&&(t.style.paddingTop=immersed+'px',t.style.background='-webkit-linear-gradient(top,rgba(215,75,40,1),rgba(215,75,40,0.8))',t.style.color='#FFF');
t&&(t.style.paddingTop=immersed+'px',t.style.height = height+'px',t.style.background='#ffffff',t.style.color='#333333');
t=document.getElementById('content');
t&&(t.style.marginTop=immersed+'px');
t=document.getElementById('scontent');
t&&(t.style.marginTop=immersed+'px');
t=document.getElementById('dcontent');
t&&(t.style.marginTop=immersed+'px');
t=document.getElementById('map');
t&&(t.style.marginTop=immersed+'px');

})(window);