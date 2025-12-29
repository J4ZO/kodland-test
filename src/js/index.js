window.sr = ScrollReveal();


sr.reveal('.header',
    {
        duration: 2000
    }
);

sr.reveal('.hero',
    {
        duration: 2000
    }
);

sr.reveal('.about',
    {
        duration: 2000
    }
);

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


document.querySelectorAll('.sound-button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('audio-pop').play();
    });
});

let intro = document.getElementById("intro-area");
document.getElementById("header__name").addEventListener('click' , function()
{
    console.log("click pop")
    intro.classList.toggle('background');
     menu.classList.toggle('header__menu--background--responsive');
});

let rules = document.getElementById("rules");
document.getElementById("footer__title").addEventListener('click' , function()
{
    console.log("click pop")
    rules.classList.toggle('background2');
});

let menu = document.getElementById('header__menu');
let burger = document.getElementById('burger');
burger.addEventListener('click', () =>
{
    burger.classList.add('burger--hidden');
    menu.classList.add('header__menu--responsive');
});

menu.addEventListener('click', (e) => {
    e.stopPropagation();
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
        burger.classList.remove('burger--hidden');
        menu.classList.remove('header__menu--responsive');
    }
});


