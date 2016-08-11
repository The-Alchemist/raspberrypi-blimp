$(document).ready(function(){
	$('#leftmotor').mousedown(function(){
		$.post("/left",
		{},
		function(data, status){});
	});
	
	$('#leftmotor').mouseup(function(){
		 $.ajax({
			url:"/left",
			type: 'delete',
			success:function(msg){}
		});
	});
	
	$('#rightmotor').mousedown(function(){
		$.post("/right",
		{},
		function(data, status){});
	});
	
	$('#rightmotor').mouseup(function(){
		 $.ajax({
			url:"/right",
			type: 'delete',
			success:function(msg){}
		});
	});
	
	$('#leftmotor').on('taphold',function(){
		$.post("/left",
		{},
		function(data, status){});
	});
	
	$('#leftmotor').on('tap',function(){
		 $.ajax({
			url:"/left",
			type: 'delete',
			success:function(msg){}
		});
	});
});