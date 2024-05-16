const imgs = document.querySelectorAll('.slider img');
const dots = document.querySelectorAll('.dot');
let currentImg = 0;
const interval = 3000;

const changeSlide = (n) => {
    for (i = 0; i < imgs.length ; i++) {
        imgs[i].style.opacity = 0;
        dots[i].className = dots[i].className.replace(' active', '');
    }
    console.log(n);
    currentImg = (currentImg + 1) % imgs.length;
    
    if(n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
    }

    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
}

var timer = setInterval(changeSlide, interval);