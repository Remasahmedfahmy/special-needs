$( document ).ready(function() {
	$('#main-menu-btn').on('click', function(){
		var menu = $('.columns', $('.main-menu'));
		if (menu.is(":visible")) {
			menu.slideUp();
		}
		else {
			menu.slideDown();
		}
	});
});