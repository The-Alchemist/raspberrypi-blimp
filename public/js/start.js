$(document).ready(function(){	
	$('#leftmotor').on('touchstart', function(){
		$('#leftmotor').removeClass('up');
		$('#leftmotor').addClass('down');
		$.post("/left",
		{},
		function(data, status){});
	});
	
	$('#leftmotor').on('touchend',function(){
		$('#leftmotor').removeClass('down');
		$('#leftmotor').addClass('up');
		 $.ajax({
			url:"/left",
			type: 'delete',
			success:function(msg){}
		});
	});
	
	$('#rightmotor').on('touchstart',function(){
		$('#rightmotor').removeClass('up');
		$('#rightmotor').addClass('down');
		$.post("/right",
		{},
		function(data, status){});
	});
	
	$('#rightmotor').on('touchend',function(){
		$('#rightmotor').removeClass('down');
		$('#rightmotor').addClass('up');
		 $.ajax({
			url:"/right",
			type: 'delete',
			success:function(msg){}
		});
	});
});