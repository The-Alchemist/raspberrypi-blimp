$(document).ready(function(){	
	$('#leftmotor').on('touchstart', function(){
		$('#colleft').toggleClass('leftdown');
		$.post("/left",
		{},
		function(data, status){});
	});
	
	$('#leftmotor').on('touchend',function(){
		$('#colleft').toggleClass('leftdown');
		 $.ajax({
			url:"/left",
			type: 'delete',
			success:function(msg){}
		});
	});
	
	$('#rightmotor').on('touchstart',function(){
		$('#colright').toggleClass('rightdown');
		$.post("/right",
		{},
		function(data, status){});
	});
	
	$('#rightmotor').on('touchend',function(){
		$('#colright').toggleClass('rightdown');
		 $.ajax({
			url:"/right",
			type: 'delete',
			success:function(msg){}
		});
	});
});