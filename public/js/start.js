$(document).ready(function(){
	$('#leftmotor').mousedown(function(){
		$.post("http://192.168.43.72:3000/left",
		{
			name: "Donald Duck",
			city: "Duckburg"
		},
		function(data, status){
			
		});
	});
	
	$('#leftmotor').mouseup(function(){
		 $.ajax({
			url:"http://192.168.43.72:3000/left",
			type: 'delete',
			success:function(msg){}
		});
	});
	
	$('#rightmotor').mousedown(function(){
		$.post("http://192.168.43.72:3000/left",
		{
			name: "Donald Duck",
			city: "Duckburg"
		},
		function(data, status){
			
		});
	});
	
	$('#rightmotor').mouseup(function(){
		 $.ajax({
			url:"http://192.168.43.72:3000/left",
			type: 'delete',
			success:function(msg){}
		});
	});
});