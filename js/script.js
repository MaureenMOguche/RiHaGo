const mobileMenu = document.querySelector('.mobile-menu');
const topnav = document.querySelector('.topnav');


mobileMenu.addEventListener('click', ()=>{
    topnav.classList.toggle('show-nav');
})