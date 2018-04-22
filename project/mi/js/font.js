window.onload=function(){
	var oul=document.getElementById('ul1');
	var oul2=document.getElementById('ul2');
	var oli=oul.children;
	var oli2=oul2.children;
	var oleft=document.getElementById('lefta');
	var oright=document.getElementById('righta');
	var obox=document.getElementById('box');
	var now=0;
	
	function change(){
		for (var i = 0; i < oli.length; i++) {
			oli[i].style.zIndex=0;
			oli2[i].style.background='';
		}
		oli[now].style.zIndex=30;
		oli2[now].style.background='red';
	}
	oright.onclick=function(){
		now++;
		if (now>=oli.length) {
			now=0;
		}
		change();		
	}
	oleft.onclick=function(){
		now--;
		if (now<0) {
			now=oli.length-1;
		}
		change();		
	}
	for (var i = 0; i < oli2.length; i++) {
		oli2[i].index=i;
		oli2[i].onclick=function(){
			now=this.index;
			change();
		}
	}
	var time=setInterval(function(){
		oright.onclick();
	},3000);
	time();
	obox.onmouseover=function(){
		clearInterval(time);
	}
}