$(document).ready(function(){ 
	$(function() {
		$('li').click(function() {
			$('li').removeClass('active');
			$(this).addClass('active');
		});
	});
});