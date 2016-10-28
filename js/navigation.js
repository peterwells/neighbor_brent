function toggle_open(){
  if($('div.mobile-nav').hasClass('closed') == true) {
    $('div.mobile-nav').removeClass('closed');
    $('div.mobile-nav').addClass('open');
  } else {
    $('div.mobile-nav').removeClass('open');
    $('div.mobile-nav').addClass('closed');
  }
}

function add_hamburger_onclick(){
  $('#hamburger').on('click',toggle_open);
}


$(window).on('load', function(){
  add_hamburger_onclick();
})
