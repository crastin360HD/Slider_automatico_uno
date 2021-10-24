let slides = document.querySelectorAll('.slide-container');
let index = 0;

// next functions

function next (){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

// prev funcction


function prev (){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

//AutoPlay

setInterval(next, 6000);
    

    
