//Menu parametre
const burger = document.querySelector('.burger');
const bars = document.querySelectorAll('.bar');
const menu = document.querySelector('.nav-list');
const menuLinks = document.querySelectorAll('.nav-link')

burger.addEventListener('click',()=>{
    for(i=0;i<bars.length;i++)
        bars[i].classList.toggle('open');
    menu.classList.toggle('open');
});

for(i=0; i<menuLinks.length; i++){
    menuLinks[i].addEventListener('click',()=>{
        for(j=0;j<bars.length;j++)
            bars[j].classList.remove('open');
        menu.classList.remove('open');
    });
}

//background change
const header = document.querySelector('header');
var bool = true;
var url ;

setInterval(f,5000);

function f(){
    if(bool)
    {
        url = 'url(/images/bg2.jpg)';
        
    }
    else
        url = 'url(/images/bg1.jpg)';
    bool = !bool;
    header.style.background = "linear-gradient(rgba(16, 29, 44, 0.95),rgb(16, 29, 43,.95))," + url + "center no-repeat";
}

//page load
window.addEventListener('load', ()=> {
    const loadPage = document.querySelector('.page-load');
    document.querySelector('body').removeChild(loadPage);
})

//scroll nav-links active
document.body.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop;
    (scrollTop < 990) ? (menuLinks[0].classList.add('active')) : (menuLinks[0].classList.remove('active'));
    (scrollTop >= 990 && scrollTop < 1980) ? (menuLinks[1].classList.add('active')) : (menuLinks[1].classList.remove('active'));
    (scrollTop >= 1980 && scrollTop < 2970) ? (menuLinks[2].classList.add('active')) : (menuLinks[2].classList.remove('active'));
    (scrollTop >= 2970 && scrollTop < 3960) ? (menuLinks[3].classList.add('active')) : (menuLinks[3].classList.remove('active'));
    (scrollTop >= 3960 && scrollTop < 4950) ? (menuLinks[4].classList.add('active')) : (menuLinks[4].classList.remove('active'));
    if(scrollTop >= 4950){
        menuLinks[5].classList.add('active');
        document.querySelector('.backTop').style.opacity = 1;
        document.querySelector('.backTop').style.pointerEvents = 'visible';
    }else{
        menuLinks[5].classList.remove('active');
        document.querySelector('.backTop').style.opacity = 0;
        document.querySelector('.backTop').style.pointerEvents = 'none';
    }
}

//footer copyright
document.querySelector('footer div').innerHTML = 'Created By <span style="color:#c69963">Said AGHERRABI</span> | Copyright © ' + (new Date()).getFullYear() + ' All rights reserved.'

//animation
AOS.init({
    easing : 'ease',
    duration : 1000
});