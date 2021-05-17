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

gsap.from(`.animate-services`, {
    ScrollTrigger: `.animate-services`, 
    duration: 0.5, 
    opacity: 0, 
    y: -150, 
    stagger: 0.6
}); 

gsap.from(`.animate-img`, {
    ScrollTrigger: `.animate-img`, 
    duration: 1.2, 
    opacity: 0, 
    x: -200,
}); 

gsap.from(`.animate-membership`, {
    ScrollTrigger: `.animate-membership`, 
    duration: 1, 
    opacity: 0, 
    y: -150, 
    stagger: 0.3, 
    delay: 0.5
}); 

gsap.from(`.animate-card`, {
    ScrollTrigger: `.animate-card`, 
    duration: 1, 
    opacity: 0, 
    y: -150, 
    stagger: 0.3, 
    delay: 0.2,
}); 

gsap.from(`.animate-team`, {
    ScrollTrigger: `.animate-team`, 
    duration: 1.5, 
    opacity: 0, 
    y: -150, 
    stagger: 0.3, 
    delay: 0.2 
})

gsap.from(`.animate-email`, {
    ScrollTrigger: `.animate-email`, 
    duration: 1, 
    opacity: 0, 
    y: -150,
    stagger: 0.3, 
    delay: 0.2
})