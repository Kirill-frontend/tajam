// Burger
const burger = document.querySelector('.header_burger')
const burgerMenu = document.querySelector('.header_menu')

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
  burgerMenu.classList.toggle('active')
  document.body.classList.toggle('lock')
})

const arrowLeft = document.querySelector('.slider_left_arrow')
const arrowRight = document.querySelector('.slider_right_arrow')

const dotsWrapp = document.querySelector('.slider_dots')

const slides = document.querySelectorAll('.slider_slide')

let slideCount = 0


function toggleSlide() {  
  slides.forEach(item => {
    item.classList.add('hide')
  })
  slides[slideCount].classList.remove('hide')
}

toggleSlide()


if (arrowLeft && arrowRight) {
  
  arrowLeft.addEventListener('click', function () {
    if (slideCount === 0) {
      slideCount = slides.length - 1
      toggleSlide()
      toggleDots()       
    } else {    
      --slideCount
      toggleSlide()
      toggleDots()
    }
  })
  
  arrowRight.addEventListener('click', function () {  
    if (slideCount < slides.length - 1) {
      ++slideCount
      toggleSlide()
      toggleDots()
    } else {
      slideCount = 0
      toggleSlide()
      toggleDots()
    }
  })
}


const createDots = () => {  

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div')
    dot.classList.add('slider_dot')
    dotsWrapp.append(dot)
  }

  const dots = document.querySelectorAll('.slider_dot')
  dots[0].classList.add('dot_active')
  dots.forEach(item => item.addEventListener('click', function(e) {    
    const dots = document.querySelectorAll('.slider_dot')
    console.log(item);

    if (e.target.classList.contains('dot_active')) {
  
      return false
    } else {
      const dots = document.querySelectorAll('.slider_dot')

      dots.forEach(item => item.classList.remove('dot_active'))
      item.classList.add('dot_active')
      dots.forEach((item, index) => {
        if (item.classList.contains('dot_active')) {
          console.log(index);
          slideCount = index                    
        }
      })
      toggleSlide()
    }
  }));
}

function toggleDots() {
  const dots = document.querySelectorAll('.slider_dot')
  
  dots.forEach(item => item.classList.remove('dot_active'));
  dots[slideCount].classList.add('dot_active')
}


if (dotsWrapp) {
  createDots()
}
const testimonialsSlides = document.querySelectorAll('.testimonials_slide')
const testimonialsAvatar = document.querySelectorAll('.avatars_author')


let activeSlide = 2
let direction = ''

const authors = document.querySelectorAll('.avatars_author')

const leftArrow = document.querySelector('.slider_left_arrow')
  .addEventListener('click', function () {
    if (activeSlide === 0) {
      activeSlide = testimonialsSlides.length - 1      
      slideDo()
    } else {
      activeSlide--
      direction = 'left'            
      slideDo()
    }
  })



const rightArrow = document.querySelector('.slider_right_arrow')
  .addEventListener('click', function () {
    if (activeSlide === testimonialsSlides.length - 1) {      
      activeSlide = 0
      slideDo()
    } else {      
      activeSlide++            
      slideDo()
    }
  })



function initialSlide() {
  testimonialsSlides.forEach(i => {
    i.classList.add('hide_slide')
  });
  testimonialsSlides[activeSlide].classList.remove('hide_slide')
}

initialSlide()

function slideDo() {
  testimonialsSlides.forEach(i => i.classList.add('hide_slide'))
  testimonialsSlides[activeSlide].classList.remove('hide_slide')

  testimonialsAvatar.forEach(i => i.classList.remove('author-active'))
  testimonialsAvatar[activeSlide].classList.add('author-active')
  

}