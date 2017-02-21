function show_hide_hamburger(){
  var viewportWidth = $(window).width();
  var emSize = parseFloat($("body").css("font-size"));
  var medViewportMin = emSize * 40.0625;
  if (viewportWidth < medViewportMin){
    $('#nav-icon').show();
  } else {
    $('#nav-icon').hide();
  }
}

function add_hamburger_onclick(){
  $('#nav-icon').click(function(){
		$(this).toggleClass('open');
    $('div.mobile-nav').toggleClass('open');
	});
}

function show_hide_non_mobile_nav(){
  var viewportWidth = $(window).width();
  var emSize = parseFloat($("body").css("font-size"));
  var medViewportMin = emSize * 40.0625;
  if (viewportWidth < medViewportMin){
    $('nav.main ul').hide();
  } else {
    $('nav.main ul').show();
  }
}

function add_check_for_size_change(){
  $(window).on('resize', function(){
    show_hide_non_mobile_nav();
    show_hide_hamburger();
  })
}

$(window).on('load', function(){
  show_hide_hamburger();
  show_hide_non_mobile_nav();
  add_check_for_size_change();
  add_hamburger_onclick();
})
