function add_hamburger_onclick(){
  $('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $('div.mobile-nav').toggleClass('open');
	});
}


$(window).on('load', function(){
  add_hamburger_onclick();
})
