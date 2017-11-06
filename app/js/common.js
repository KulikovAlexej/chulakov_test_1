$(function() {

	$('#hamburger').click(function(){
		var navbar = $('aside nav');
		$(this).toggleClass('open');

		if(navbar.is(':visible')){
			navbar.slideUp(300);
		}
		else{
			navbar.slideDown(300);
		}
		
	})



});
