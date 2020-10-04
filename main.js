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
        url = 'url(bg2.jpg)';
        
    }
    else
        url = 'url(bg1.jpg)';
    bool = !bool;
    header.style.background = "linear-gradient(rgba(16, 29, 44, 0.95),rgb(16, 29, 43,.95))," + url + "center no-repeat";
}

//page load
window.addEventListener('load', ()=> {
    const loadPage = document.querySelector('.page-load');
    document.querySelector('body').removeChild(loadPage);
})

//scroll nav-links active & button back to top
document.body.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop;
    var section = document.querySelectorAll('section');
    (scrollTop < section[0].offsetTop) ? (menuLinks[0].classList.add('active')) : (menuLinks[0].classList.remove('active'));
    (scrollTop >=  section[0].offsetTop && scrollTop <  section[1].offsetTop) ? (menuLinks[1].classList.add('active')) : (menuLinks[1].classList.remove('active'));
    (scrollTop >=  section[1].offsetTop && scrollTop <  section[2].offsetTop) ? (menuLinks[2].classList.add('active')) : (menuLinks[2].classList.remove('active'));
    (scrollTop >=  section[2].offsetTop && scrollTop <  section[3].offsetTop) ? (menuLinks[3].classList.add('active')) : (menuLinks[3].classList.remove('active'));
    (scrollTop >=  section[3].offsetTop && scrollTop <  section[4].offsetTop) ? (menuLinks[4].classList.add('active')) : (menuLinks[4].classList.remove('active'));
    if(scrollTop >=  section[4].offsetTop){
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
