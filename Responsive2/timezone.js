const pcHeader = document.getElementsByClassName('pc-header');

window.addEventListener('scroll', () => {
  if(scrollY>500) {
    pcHeader[0].classList.add('fixed');
  }
  else {
    pcHeader[0].classList.remove('fixed');
  }
})