 $('.box').pep({constrainTo: '.wool'}); 
 var getRandom = function(min,max){
 	return Math.round(min+Math.random()*(max-min));
 }
 var getRandomColor = function(){
	return  '#' +
	(function(color){
		return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
  		&& (color.replace(/^0/,"").length == 6) ?  color : arguments.callee(color);
	})('');
}

 $('.box').css({
 	left:getRandom(0,700),
 	top:getRandom(0,400),
 })
 $('.btn').on('click',function(){
 	var oBox = document.createElement('div');
 	$(oBox).css({
	 	left:getRandom(0,700),
	 	top:getRandom(0,400),
	 	backgroundColor:getRandomColor
	}).addClass('active').html($('.intr').val());
 	$('.wool').append($(oBox));

 })