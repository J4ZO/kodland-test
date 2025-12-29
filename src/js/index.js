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

sr.reveal('.footer',{
        duration: 2000
    });


document.querySelectorAll('.sound-button').forEach(button => {
    button.addEventListener('click', function() {
        console.log("play sound");
        document.getElementById('audio-pop').play();
    });
});

