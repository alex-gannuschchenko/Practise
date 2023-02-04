"use strict"

const burger = document.querySelector('.icon-menu')
const burgerColor = document.querySelector('.icon-menu-colored')
const menuMob = document.querySelector('.burger')
const menu = document.querySelector('.burgerpc')
const header = document.querySelector('.header__container')
const header_content = document.querySelector('.header__content')
//HEADER-------------------------------------------------------------
//burger----------------------------------------//
if (burger) {
   burger.addEventListener("click", (e) =>{
      document.body.classList.toggle('_lock')
      if (menuMob) {
         burger.classList.toggle('_active')
         menuMob.classList.toggle('_active')
      } if(menu) {
         menu.classList.toggle('_active')
         header.classList.toggle('_hide')
      }
   });
}
if (burgerColor) {
   burgerColor.addEventListener("click", (e) => {
      document.body.classList.toggle('_lock')
      if (menuMob) {
         burgerColor.classList.toggle('_active')
         menuMob.classList.toggle('_active')
      } if(menu) {
         menu.classList.toggle('_active')
         header.classList.toggle('_hide')
      }
   });
}
//-----------------------------------------------//
//selector--------------------------------------//
const dropdowns = document.querySelectorAll('.select__select')
dropdowns.forEach(dropdown => {
   const selectMenu = dropdown.querySelector('.select__body')
   const selectButton = dropdown.querySelector('.select__button')
   const selectTitle = dropdown.querySelector('.select__title')
   const options = dropdown.querySelectorAll('.select__item')

   selectButton.addEventListener("click", () => selectMenu.classList.toggle('active')) 

options.forEach(option => {
   option.addEventListener("click", () => {
      const selected = option.innerText;
      selectTitle.innerText = selected;

      selectMenu.classList.remove('active')
   })
})
})



//----------------------------------------------//
//scroll----------------------------------------//   
window.addEventListener("scroll", () => {
   if (window.scrollY === 0) {
      if (header_content.classList.contains("_colored")) {
         header_content.classList.remove("_colored");
      }
      if (header_content.classList.contains("_colored-page")) {
         header_content.classList.remove("_colored-page");
   }
}
   else  {
      if (!header_content.classList.contains("_colored")) {
         header_content.classList.add("_colored");
      }
      if (!header_content.classList.contains("_colored-page")) {
         header_content.classList.add("_colored-page");
      }
   }
});
//----------------------------------------------//


//FOOTER-------------------------------------------------------------------------------------------//

const accordion = document.getElementsByClassName('content__column');
var i;
for (i=0; i<accordion.length; i++) {
   accordion[i].addEventListener('click', function () {
      this.classList.toggle('active');
   })
}

//PAGE CATEGORY-----------------------------------------------------------------------------------//
//filter-------------------//
const filterDrop = document.querySelector('.filter__item_drop')
const filterList = document.querySelector('.filter__list')
if (filterDrop) {
   filterDrop.addEventListener("click", () => { filterList.classList.toggle('active') })
}
//PAGE PRODUCT CARD-------------------------------------------------------------------------------//
let image = document.querySelector(".product-slider__image img");
let thumbs = document.querySelectorAll(".slider-nav img");
thumbs.forEach(function(item, i, thumbs) {
  item.addEventListener("click", function() {
     image.src = item.src;
  });
});