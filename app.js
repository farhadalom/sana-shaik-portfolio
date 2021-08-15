let menuBtn = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let scrollBar = document.querySelector('.scroll-bar');

menuBtn.addEventListener('click', () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active'); 
    scrollIndicator(); 
    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }
    else{
        document.querySelector('#scroll-top').classList.remove('active');
    }

}

function scrollIndicator(){

    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    scrollBar.style.width = percentage + '%';

}