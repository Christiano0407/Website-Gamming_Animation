const menu = document.getElementById(`mobile-menu`); 
const menuLinks = document.querySelector(`.navBar__menu`); 
const navLogo = document.getElementById(`navBar__logo`); 
const body = document.querySelector(`body`); 

              /* dISPLAY mOBILE*/
const mobileMenu = () => {
    menu.classList.toggle(`is-active`); 
    menuLinks.classList.toggle(`active`);
    body.classList.toggle(`active`);  
}
menu.addEventListener(`click`, mobileMenu); 


              /*Animate--Scroll*/
 gsap.registerPlugin(ScrollTrigger);  

gsap.from(`.animate__hero`, {
    duration: 1.5, 
    opacity: 0, 
    y: -150, 
    stagger: 0.9
}); 
