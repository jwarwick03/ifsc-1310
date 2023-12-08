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
    $("#content-1").show(300);
    $(this).css({"display": "none"
    });
  });

  $("#rm-2").click(function() {
    $("#content-2").toggle(300);
    $(this).css({"display": "none"
    });
  });

  $("#rm-3").click(function() {
    $("#content-3").toggle(300);
    $(this).css({"display": "none"
    });
  });

// FAQ Answer slide toggle
  $("#question-1").click(function() {
    $("#answer-1").slideToggle();
  });
  $("#question-2").click(function() {
    $("#answer-2").slideToggle();
  });
  $("#question-3").click(function() {
    $("#answer-3").slideToggle();
  });
  $("#question-4").click(function() {
    $("#answer-4").slideToggle();
  });
  $("#question-5").click(function() {
    $("#answer-5").slideToggle();
  });
  $("#question-6").click(function() {
    $("#answer-6").slideToggle();
  });
  $("#question-7").click(function() {
    $("#answer-7").slideToggle();
  });
  $("#question-8").click(function() {
    $("#answer-8").slideToggle();
  });
  $("#question-9").click(function() {
    $("#answer-9").slideToggle();
  });
  $("#question-10").click(function() {
    $("#answer-10").slideToggle();
  });
  $("#question-11").click(function() {
    $("#answer-11").slideToggle();
  });
  $("#question-12").click(function() {
    $("#answer-12").slideToggle();
  });
  $("#question-13").click(function() {
    $("#answer-13").slideToggle();
  });

});