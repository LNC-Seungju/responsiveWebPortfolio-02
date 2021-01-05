const pcHeader = document.getElementsByClassName('pc-header');
const mobileHeader = document.getElementsByClassName('mobile-header');

window.addEventListener('scroll', () => {
  if(scrollY>500) {
    pcHeader[0].classList.add('fixed');
    mobileHeader[0].classList.add('fixed');
  }
  else {
    pcHeader[0].classList.remove('fixed');
    mobileHeader[0].classList.remove('fixed');
  }
})

// Mobile Dropdown 
const mobileTrigger = document.getElementsByClassName('mobile-trigger');
const mobileDropdown = document.getElementsByClassName('mobile-dropdown');
const submenuTitle = document.getElementsByClassName('mobile-submenu-title');
const mobileSubmenu = document.getElementsByClassName('mobile-submenu')
const submenuTrigger = document.getElementsByClassName('mobile-submenu-trigger');

mobileTrigger[0].addEventListener('click', ()=> {
  mobileDropdown[0].classList.toggle('dropdown');
})
for(let i = 0; i<submenuTitle.length; i++) {
  submenuTitle[i].addEventListener('click', ()=> {
    submenuTrigger[i].classList.toggle('active');
    mobileSubmenu[i].classList.toggle('active');
  })
}


