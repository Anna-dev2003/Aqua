
const selectThem = document.getElementById('site-theme')
const selectLang = document.getElementById('site-language')
const link = document.getElementById("theme-link")

//Menu
$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.menu-overlay').toggleClass('open');
        $(this).toggleClass('open');
     });
});

//change theme

function changeTheme(value)
{
    let lightTheme = "styles/light-style.css";
    let darkTheme = "styles/dark-style.css";
    let theme = "";

    if(value === 'dark'){
        link.setAttribute("href", darkTheme);
        theme = "dark"
    }else if(value === 'light'){
        link.setAttribute("href", lightTheme)
        theme = "light"
    }

}


selectThem.addEventListener('change', (event) => {
    const value = event.target.value;
    changeTheme(value)
})

//slider

$('.comments-slider').slick({
    centerMode: true,
    slidesToShow: 3,
    dots: true,
    arrows: false,
     responsive: [
     {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
        //   centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
        //   centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

//parallax

$('.parallax-window').parallax({imageSrc: 'https://images.wallpaperscraft.ru/image/single/more_voda_poverkhnost_volny_118675_1920x1080.jpg'});

//change language

selectLang.addEventListener('change', (event) => {



    let siteUkrText = document.body.querySelectorAll('.ukr')
    let siteEngText = document.body.querySelectorAll('.eng')

    const value = event.target.value;



    if(value === 'ukr'){

        siteEngText.forEach((text) => {
            text.style.display = 'none'
        })

        siteUkrText.forEach((text) => {
            text.style.display = 'block'
            // console.log(text)
        })
        
    }

    if(value === 'eng'){

        siteUkrText.forEach((text) => {
            text.style.display = 'none'

        })

        siteEngText.forEach((text) => {
            text.style.display = 'block'
        })

    }

   
})

//site moving

$('#sessions').on('click', function(e){
  e.preventDefault()
  $('html, body').animate({scrollTop: $('#sessions-section').offset().top}, 500)
})

$('.button_price').on('click', function(e){
  e.preventDefault()
  $('html, body').animate({scrollTop: $('.price-section').offset().top}, 500)
})

//script

$('.modal-bg').on('click', function(e){
  if($(e.target).closest('.modal-window').length == 0){
     $(this).fadeOut(300) 
  }   
})
$('.button-registration').on('click', function(e){
  e.preventDefault()
  $(this).parents('div').parent('form').parent('.modal-window').parent('.modal-bg').fadeOut(300)
})

$('.button-modal').on('click', function(){
  $('.modal-bg').fadeIn(300)
})

// $('.button-registration').on('click', function(e){
//   e.preventDefault()
//   $(this).parent('.modal-bg').fadeOut(300)
// })

$(window).scroll(function(){
  if($(this).scrollTop() > 100){
      $('#up').fadeIn();
  }else{
      $('#up').fadeOut()
  }
})

