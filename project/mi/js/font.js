window.onload=function(){
	handleCart();
	handleNav();
	handleMenu()
}
function handleCart(){
	var tNav=document.querySelector('.nav');
	var tNavD=document.querySelector('.nav .navD');
	var tNavDS=tNavD.firstElementChild;
	var tNavI=tNav.firstElementChild;
	var tNavA=tNavI.nextElementSibling;
	tNav.onmouseenter=function(){
		tNav.style.backgroundColor='#fff';
		tNavI.style.color='red';
		tNavA.style.color='red';
		
		animation(tNavD,{'height':100},true,)
	}
	tNav.onmouseleave=function(){
		tNav.style.backgroundColor='#424242';
		tNavI.style.color='#b0b0b0';
		tNavA.style.color='#b0b0b0';
		animation(tNavD,{'height':0},true)
	}
}
function handleNav(){
	var uBox1=document.querySelector('.box1'); 
	var uBox1Li=uBox1.getElementsByTagName('li');
	var uNavcontent=document.querySelector('.nav-content');
	var timer;
	for (var i = 0; i < uBox1Li.length; i++) {
		uBox1Li[i].onmouseenter=function(){
			clearTimeout(timer);
			animation(uNavcontent,{'height':200})
		} 
		uBox1Li[i].onmouseleave=function(){
			timer=setTimeout(function(){
				animation(uNavcontent,{'height':0},true)
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