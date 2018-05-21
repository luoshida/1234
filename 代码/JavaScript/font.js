window.onload=function (){
			
			function abc(){
				document.getElementById('change').style.background='green';
			}
			document.getElementById('change').onclick= abc;



			document.getElementById('change1').onclick=function (){
				document.getElementById('change1').style.background='red';
			}
		}