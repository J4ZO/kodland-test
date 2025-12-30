// scroll animations
window.sr = ScrollReveal();
sr.reveal('.header',{
        duration: 2000
    });

sr.reveal('.hero',{
        duration: 2000
    });

sr.reveal('.about',{
        duration: 2000
    });

sr.reveal('.products__title',{
        duration: 2000
    });
sr.reveal('.products__list',{
        duration: 2000
    });

sr.reveal('.products__list',{
        duration: 2000
    });
sr.reveal('.rules',{
        duration: 2000
    });
sr.reveal('.footer',{
        duration: 2000
    });
    
// Variables
let intro = document.getElementById("intro-area");
let rules = document.getElementById("rules");
let menu = document.getElementById('header__menu');
let burger = document.getElementById('burger');

// sound buttons
document.querySelectorAll('.sound-button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('audio-pop').play();
    });
});

// Change background
document.getElementById("header__name").addEventListener('click' , function()
{
    console.log("click pop")
    intro.classList.toggle('background');
     menu.classList.toggle('header__menu--background--responsive');
});

// Circle hover animation with mouse
intro.addEventListener('mousemove', (e) => {
    const rect = intro.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    intro.style.setProperty('--mouse-x', `${x}px`);
    intro.style.setProperty('--mouse-y', `${y}px`);
});

intro.addEventListener('mouseleave', () => {
    intro.style.setProperty('--mouse-x', '50%');
    intro.style.setProperty('--mouse-y', '50%');
});

// Change grid background
document.getElementById("footer__title").addEventListener('click' , function()
{
    console.log("click pop")
    rules.classList.toggle('background2');
});

// Menu burger function
burger.addEventListener('click', () =>
{
    burger.classList.add('burger--hidden');
    menu.classList.add('header__menu--responsive');
});
// Avoir errors that close the menu
menu.addEventListener('click', (e) => {
    e.stopPropagation();
});
// Hide menu when user press outside the menu
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
        burger.classList.remove('burger--hidden');
        menu.classList.remove('header__menu--responsive');
    }
});


