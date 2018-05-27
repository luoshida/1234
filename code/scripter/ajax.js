(function(w){
	function ajax(method,url,data,fnSucc,fnFaild){
		//1.创建ajax对象
		var oAjax = new XMLHttpRequest();//XHR
		if(method == "POST"){//POST请求
			//2.和服务器建立连接
			oAjax.open(method,url,true);
			oAjax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			//3.发送请求
			oAjax.send(data);				
		}else{//GET请求
			if(data){
				url = url + "?" + data;
			}
			//2.和服务器建立连接
			oAjax.open(method,url,true);
			//3.发送请求
			oAjax.send();
		}

		//4.监听方法获取数据
		oAjax.onreadystatechange = function(){
            if(oAjax.readyState == 4){//数据完全返回
            	if(oAjax.status == 200){
            		fnSucc(oAjax.responseText);
            	}else{
            		if(fnFaild){
            			fnFaild(oAjax.status);
            		}
            	}
            	
            }		
		}
	}
	w.ajax = ajax;
})(window);