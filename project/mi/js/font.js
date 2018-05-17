window.onload=function(){
	handleCart();
	handleNav();
	handleMenu();
	handleCarousel();
}
function handleCart(){
	var tNav=document.querySelector('.nav');
	var tNavD=document.querySelector('.nav .navD');
	var tNavDS=tNavD.querySelector('.navDS');
	var tNavDLoad=tNavD.querySelector('.loading');
	var tNavDS=tNavD.firstElementChild;
	var tNavI=tNav.firstElementChild;
	var tNavA=tNavI.nextElementSibling;
	tNav.onmouseenter=function(){
		tNav.style.backgroundColor='#fff';
		tNavI.style.color='red';
		tNavA.style.color='red';
		tNavDLoad.style.display = 'block';
		animation(tNavD,{'height':100},false,function(){
			tNavDLoad.style.display='none';
			tNavDS.style.display='block';
		})
	}
	tNav.onmouseleave=function(){
		tNav.style.backgroundColor='#424242';
		tNavI.style.color='#b0b0b0';
		tNavA.style.color='#b0b0b0';
		tNavDS.style.display = 'none';
		animation(tNavD,{'height':0},false)
	}
}
function handleNav(){
	var uBox1=document.querySelector('.box1'); 
	var uBox1Li=uBox1.getElementsByTagName('li');
	var uNavcontent=document.querySelector('.nav-content');
	var uNavcontentUl=uNavcontent.getElementsByTagName('ul')[0];
	var uNavcontentLi=uNavcontent.getElementsByTagName('li');
	var uNavLoad=document.querySelector('.nav-content .loading');
	var timer;
	for (var i = 0; i < uBox1Li.length-2; i++) {
		uBox1Li[i].index=i;
		uBox1Li[i].onmouseenter=function(){
			clearTimeout(timer);
			uNavcontentUl.innerHTML='';

			animation(uNavcontent,{'height':200});
			var index=this.index;
			setTimeout(function(){
				uNavLoad.style.display = 'none';
				loadData(index);	
			},1000)
		} 
		uBox1Li[i].onmouseleave=function(){
			timer=setTimeout(function(){
				
				animation(uNavcontent,{'height':0},true,)
			},300);
			
		}
		uNavcontent.onmouseenter=function(){
			clearTimeout(timer);
		}
		uNavcontent.onmouseleave=function(){
			timer=setTimeout(function(){
				animation(uNavcontent,{'height':0},true)
			},300);
		}
	}
	function loadData(index){
		uNavcontentUl.innerHTML='';
		var aTheArray=theArray[index];
		if(!aTheArray){
			return;
		}
		for (var i = 0; i < aTheArray.length; i++) {
			aTheArray[i]
			var oLi=document.createElement('li');
			if (aTheArray[i].tag) {
				var oDiv1=document.createElement('div');
				oDiv1.innerHTML=aTheArray[i].tag;
				oLi.appendChild(oDiv1);
			}else{
				var oDiv1=document.createElement('div');
				oDiv1.style.opacity=0;
				oLi.appendChild(oDiv1);
			}
			var oDiv2=document.createElement('div');
			var oImg=document.createElement('img');
			oImg.src=aTheArray[i].img;
			oDiv2.appendChild(oImg);
			oLi.appendChild(oDiv2);
			var oP1=document.createElement('p');
			oP1.innerHTML=aTheArray[i].name;
			oLi.appendChild(oP1);
			var oP2=document.createElement('p');
			oP2.innerHTML=aTheArray[i].price+'元起';
			oLi.appendChild(oP2);
			uNavcontentUl.appendChild(oLi);
		}
	}
}
function handleMenu(){
	var uBox2=document.querySelector('.up .box2');
	var uBox2D=document.querySelector('.box2 .box2D');
	var uBox2I=document.querySelector('.box2 .box2I');
	uBox2I.onfocus=function(){
		uBox2D.style.display='block';
		uBox2I.style.outline='none';
		uBox2I.style.borderColor='orange';
	}
	uBox2I.onblur=function(){
		uBox2D.style.display='none';
		uBox2I.style.borderColor='#e0e0e0';
	}
}
function handleCarousel(){
	new Carousel({
		id:'carousel',
		aImg:[
			'images/xuanchuan1.png',
			'images/xuanchuan2.png',
			'images/xuanchuan3.png',
			'images/xuanchuan4.png',
			'images/xuanchuan5.png'
		],
		width:1226,
		height:460,
		playDuration:3000		
	})
}