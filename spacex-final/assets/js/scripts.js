$(document).ready(function() {

    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000
    });

  $(".click-toggle").click(function() {
    $(".drop-down").slideDown();
    $(this).css({ "transform": "rotate(180deg)"
    });
  });


// Cards Read More //
  $("#rm-1").click(function() {
    $("#content-1").toggle(500);
  });

  $("#rm-2").click(function() {
    $("#content-2").toggle(500);
  });

  $("#rm-3").click(function() {
    $("#content-3").toggle(500);
  });

});