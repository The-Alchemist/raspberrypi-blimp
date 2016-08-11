$(document).ready(function(){

	
	
	$('#leftmotor').on('touchstart', function(){
		$.post("/left",
		{},
		function(data, status){});
	});
	
	$('#leftmotor').on('touchend',function(){
		 $.ajax({
			url:"/left",
			type: 'delete',
			success:function(msg){}
		});
	});
	
	$('#rightmotor').on('touchstart',function(){
		$.post("/right",
		{},
		function(data, status){});
	});
	
	$('#rightmotor').on('touchend',function(){
		 $.ajax({
			url:"/right",
			type: 'delete',
			success:function(msg){}
		});
	});
});