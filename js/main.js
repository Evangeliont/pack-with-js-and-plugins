document.addEventListener('DOMContentLoaded', () => {
  let burger = document.querySelector('.burger')
  let menu = document.querySelector('.header__nav')
  let menuLinks = document.querySelectorAll('.nav__link')
  
  burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active')
  menu.classList.toggle('header__nav--active')
  document.body.classList.toggle('scroll-off')
  })
  
  menuLinks.forEach((el) => {
    el.addEventListener('click', () => {
      burger.classList.remove('burger--active')
      menu.classList.remove('header__nav--active')
      document.body.classList.remove('scroll-off')
    })
  })
  
  let buttonMore = document.querySelector('.more')
  let childElement = document.querySelectorAll('.child')
  
  buttonMore.addEventListener('click', () => {
    childElement.forEach((el) => {
      el.classList.toggle('child--visible')
    })
  })
})