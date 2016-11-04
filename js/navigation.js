function add_hamburger_onclick(){
  $('#nav-icon').show();
  $('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $('div.mobile-nav').toggleClass('open');
	});
}

function hide_non_mobile_nav(){
  var viewportWidth = $(window).width();
  var emSize = parseFloat($("body").css("font-size"));
  var medViewportMin = emSize * 40.0625;
  if (viewportWidth < medViewportMin){
    $('nav.main ul').hide();
  }
}

function show_non_mobile_nav(){
  var viewportWidth = $(window).width();
  var emSize = parseFloat($("body").css("font-size"));
  var smallViewportMax = emSize * 40;
  if (viewportWidth > smallViewportMax){
    $('nav.main ul').show();
  }
}

function add_check_for_size_change(){
  $(window).on('resize', function(){
    hide_non_mobile_nav();
    show_non_mobile_nav();
  })
}

$(window).on('load', function(){
  hide_non_mobile_nav();
  add_check_for_size_change();
  add_hamburger_onclick();
})
