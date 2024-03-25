var swiperCategories = new Swiper('.categories-container' , {
    spaceBetween: 24,
    loop:true,
    
    navigation : {
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev',
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
        992: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 6,
          spaceBetween: 24,
        },
      },

});


////////////////////////////////////////

const tabs  = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[content]');

  tabs.forEach((tab) => {
    tab.addEventListener('click' , () => {
      const target = document.querySelector(tab.dataset.target)
      
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove('active-tab')
      })
      target.classList.add('active-tab')

      tabs.forEach((tabs) => {
        tabs.classList.remove('active-tab')
      })

      tab.classList.add('active-tab')

    })
    })    


///////////////////////////////////////////

var swiperProducts = new Swiper('.new-container' , {
  spaceBetween: 24,
  loop:true,
  
  navigation : {
      nextEl : '.swiper-button-next',
      prevEl : '.swiper-button-prev',
  },
  breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },

});



///////////////////////////////////////////////////////


function imgGallery() {
  const mainImg = document.querySelector('.details-img');
  const smallImg = document.querySelectorAll('.details-small-img');

  smallImg.forEach((img) => {
    img.addEventListener('click' , function(){
      mainImg.src = this.src;
    })
  })

}

imgGallery(); 

//////////////////////////////////////////////////////

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle) {
  navToggle.addEventListener('click' , () => {
    navMenu.classList.add('show-menu')
  })
}

if(navClose) {
  navClose.addEventListener('click' , () => {
    navMenu.classList.remove('show-menu')
  })
}