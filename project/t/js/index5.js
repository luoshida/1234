(function(){
	var oSon2=document.getElementById('son2');
	var oButton=document.getElementById('button');
	var oSon=document.querySelector('.son');
	var timer;
	oButton.onmouseover=function(){
		animation(oSon2,{'marginLeft':0},true);
		oSon.style.display='block';	
	}
	oSon2.onmouseover=function(){
		animation(oSon2,{'marginLeft':0},true);
		oSon.style.display='block';	
	}
	oSon2.onmouseout=function(){
		animation(oSon2,{'marginLeft':-183},true);
		oSon.style.display='none';			
	}
})();

