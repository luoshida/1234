(function(){
	new Carousel({
		id:'show',
		aImg:[
			'images/image5/zhu1.png','images/image5/zhu2.png','images/image5/zhu3.png'
		],
		width:1220,
		height:501,
		playDuration:4000,
	}); 
})();
(function(){
	var oAccountL=document.querySelector('.account .accountL');
	var oAccountD=document.querySelector('.account .accountD');
	var timer;
	oAccountL.onmouseenter=function(){
		oAccountD.style.display='block';
	}
	oAccountL.onmouseleave=function(){
		oAccountD.style.display='none';	
	}
	oAccountD.onmouseenter=function(){
		oAccountD.style.display='block';
	}
	oAccountD.onmouseleave=function(){
		oAccountD.style.display='none';
	}
})();
(function(){
 	var oDemon=document.getElementById('demon');
 	var oDemonLi=oDemon.getElementsByTagName('li');
 	for (var i = 0; i < oDemonLi.length; i++) {
 		oDemonLi[i].onmouseenter=function(){
 			animation(this,{'opacity':0},false);
 		}
 		oDemonLi[i].onmouseleave=function(){
 			animation(this,{'opacity':100},true);
 		}
 	}
})();
(function(){
	var oLi8=document.querySelector('.label .li8');
	var oLabel=document.querySelector('.label');
	var oA=document.querySelectorAll('.label a');

	var oLiList=document.querySelector('.content .liList');
	var oNav=document.querySelector('.content .nav');
	var timer;
	oLi8.onmouseenter=function(){
		animation(oLiList,{'height':250},true);
		oNav.style.backgroundColor='white';
		oLabel.className='label btnLine';
	}
	oLi8.onmouseleave=function(){
		animation(oLiList,{'height':0},true);
		oNav.style.backgroundColor='#e5e5e5';
		oLabel.className='label';
	}
	oLiList.onmouseenter=function(){
		animation(oLiList,{'height':250},true);
		oNav.style.backgroundColor='white';
		oLabel.className='label btnLine';
	}
	oLiList.onmouseleave=function(){
		animation(oLiList,{'height':0},true);
		oNav.style.backgroundColor='#e5e5e5';
		oLabel.className='label';
	}
	for (var i = 0; i < oA.length; i++) {
		oA[i].onmouseover=function(){
			this.style.opacity=1;
		}
		oA[i].onmouseout=function(){
			this.style.opacity=0.8;
		}
	}
})();