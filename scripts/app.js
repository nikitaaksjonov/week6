/* console.log('Hi! I am so horny!') */
/* Select movie original poster */
const moviePoster = document.querySelector('.poster');

/* Select modal window layer */
let modal = document.querySelector('#myModale');

/* Select close bottom */
let closeBtm = document.querySelector('.closebtm');

/* Select modal window image */
let modalImage = document.querySelector('.movie-poster-modal');

const slides = document.getElementsByClassName('carusel__item');
const slidesTotal = slides.length;
const nextbutton = document.querySelector('#carusel__button--next');
const prevbutton = document.querySelector('#carusel__button--prev');
console.log(slidesTotal)

let slidePosition=0;

moviePoster.addEventListener('click',()=>{
    modal.style.display= 'block';
    modalImage.src=moviePoster.src;
    console.log(slidePosition)
});





nextbutton.addEventListener('click', ()=>{
    for(let slide of slides){
        slide.classList.remove('carusel__item--visible');
    }
    if(slidePosition===slidesTotal-1){
        slidePosition=0;
    }else{
        slidePosition++;
    }
    slides[slidePosition].classList.add('carusel__item--visible');
    console.log(slidePosition);
    
});

prevbutton.addEventListener('click', ()=>{

    for(let slide of slides){
        slide.classList.remove('carusel__item--visible');
    }
    if(slidePosition===0){
        slidePosition=slidesTotal-1;
    }else{
        slidePosition--;
    }
    slides[slidePosition].classList.add('carusel__item--visible')
    

});




closeBtm.addEventListener('click',()=>{

    modal.style.display= 'none';
    for(let slide of slides){
        slide.classList.remove('carusel__item--visible');
    }
    slides[0].classList.add('carusel__item--visible')
    slidePosition=0;
    

    
});
window.addEventListener('click', (event)=> {
    if(event.target===modal){
        modal.style.display= 'none';
        for(let slide of slides){
            slide.classList.remove('carusel__item--visible');
        }
        slides[0].classList.add('carusel__item--visible')
        slidePosition=0;
        
    }
});

