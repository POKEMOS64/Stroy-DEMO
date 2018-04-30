
$(function(){
  if($(window).width() < 960) {
    $('.hide-on-med-and-down').addClass("sidenav");
    $('.hide-on-med-and-down').removeClass("right hide-on-med-and-down");
    $('.sidenav-close').css('display','block');
    $('.sidenav').sidenav();

  } else {
    // change functionality for larger screens
  }
});
$('.owl-carousel.slide__carusel').owlCarousel({
  loop:true,
  dots:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
$('.owl-carousel.project__carusel').owlCarousel({
  loop:true,
  dots:false,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      },
      1300:{
          items:5
      }
  }
})

$(document).ready(function(){
  $('.tooltipped').tooltip();
  $('.collapsible').collapsible();
  $('.modal').modal();
  $('select').formSelect();
  $("[data-porfolio]").fancybox({
    margin : [44,0,22,0],
        thumbs : {
            autoStart : true
        }
});
});