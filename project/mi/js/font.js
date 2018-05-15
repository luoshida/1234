window.onload=function(){
	var tNav=document.querySelector('.nav');
	var tNavD=document.querySelector('.nav .navD');
	var tNavDS=tNavD.firstElementChild;
	var tNavI=tNav.firstElementChild;
	var tNavA=tNavI.nextElementSibling;
	console.log(tNav);
	tNav.onmouseenter=function(){
		tNav.style.backgroundColor='#fff';
		tNavI.style.color='red';
		tNavA.style.color='red';
		
		animation(tNavD,{'height':300},true,function(){
			tNavD.style.borderTop='1px solid #b0b0b0'
		})
	}
	tNav.onmouseleave=function(){
		tNav.style.backgroundColor='#424242';
		tNavI.style.color='#b0b0b0';
		tNavA.style.color='#b0b0b0';
		animation(tNavD,{height:'0px'},true,function(){
			tNavD.style.borderTop='none'
		})
	}
}