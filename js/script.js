$(document).ready(function(){
  $('.mobile_menu').on('click', function(){
    $('.navigation').slideToggle();
  })

  const aboutSwiper = new Swiper('.about', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 400,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
     
      },
      // when window width is >= 480px
      560: {
        slidesPerView: 2,
      
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
       
      },
      900: {
        slidesPerView: 4,
       
      }
    }
  });
  
  $(function() {
    var tab = $('#tabs .tabs-items > div'); 
    tab.hide().filter(':first').show(); 
    
    // Клики по вкладкам.
    $('#tabs .tabs-nav a').click(function(){
      tab.hide(); 
      tab.filter(this.hash).show(); 
      $('#tabs .tabs-nav a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':first').click();
   
    // Клики по якорным ссылкам.
    $('.tabs-target').click(function(){
      $('#tabs .tabs-nav a[href=' + $(this).data('id')+ ']').click();
    });
  });

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
  
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

})

