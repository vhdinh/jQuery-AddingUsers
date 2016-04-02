$(document).ready(function(){

	$('button').click(function(){
		if($('#first').val().length < 1 || $('#last').val().length < 1 || $('#email').val().length < 1 || $('#contact').val().length < 1){
			alert("All fields must be filled out")
			return false
		}
		else{
			$('form').submit(function(){
				
				var one = $('#first').val();
				var two = $('#last').val();
				var three = $('#email').val();
				var four = $('#contact').val();
				$('tbody').append("<tr><td>"+ one + "</td><td>" + two + "</td><td>" + three + "</td><td>" + four + "</td></tr>");
				$(this).find("input:text").val("");
			return false
			});
		}
	})
})