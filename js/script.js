$(document).ready(function(){
    $('.about-features').waypoint(function(direction){
        if(direction==='down'){
            $('nav').addClass('sticky')
        }else{
            $('nav').removeClass('sticky')
        }
    },{
        offset:'20%'
    })

    $('.scroll-to-plan').click(()=>{
       
        $('html,body').animate({scrollTop: $('.scroll-plans').offset().top},800)
    })

    $('.scroll-to-about').click(()=>{
        $('html,body').animate({scrollTop:$('.scroll-about').offset().top},900)

    })


    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  $('.aos-1').waypoint(function(direction){
          $('.aos-1').addClass('animate__animated animate__fadeInDown')

  },{
      offset:'40%'
  })

  $('.aos-2').waypoint(function(direction){
        $('.aos-2').addClass('animate__animated animate__fadeInUp animate__delay-0.5s')

},{
    offset:'40%'
})
$('.aos-3').waypoint(function(direction){
        $('.aos-3').addClass('animate__animated animate__fadeInUp animate__delay-0.7s')
},{
    offset:'40%'
})
$('.aos-4').waypoint(function(direction){
        $('.aos-4').addClass('animate__animated animate__fadeInUp animate__delay-1s')
},{
    offset:'40%'
})

$('.aos-5').waypoint(function(direction){
        $('.aos-5').addClass('animate__animated animate__slideInUp animate__slow ')
},{
    offset:'40%'
})

$('.aos-6').waypoint(function(direction){
        $('.aos-6').addClass('animate__animated animate__rubberBand')
},{
    offset:'40%'
})


$('.mobile-nav').click(()=>{
  let mobile_nav=$('.mobile-nav')
})



    
    
})