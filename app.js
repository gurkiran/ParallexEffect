$(window).scroll(function(){

  var scroll = $(this).scrollTop();

  $('.name').css({
    'transform':'translate(0px,'+ scroll/4+'%)'
  })

  $('.peep').css({
    'transform':'translate(0px,-'+scroll/4+'% )'
  })

})
