


var menu_toggler = document.querySelector(".menu-toggler");
var menu_slider = document.querySelector(".nav-links");
menu_toggler.addEventListener('click', () => {
    menu_toggler.classList.toggle('menu-toggler-active');
    menu_slider.classList.toggle('nav-links-active')
});

var header = document.querySelector('header');
lastscroll = 0;
window.addEventListener('scroll',()=>{
    currentscroll = window.scrollY;
    netscroll = currentscroll-lastscroll;
    if(netscroll >= 0){
     header.style.transform = 'translateY(-80px)';
     if(menu_toggler.classList.contains('menu-toggler-active'))
     {
         menu_toggler.click();
     }

    }
    else{
        header.style.transform = 'translateY(0px)';
    }

    lastscroll = currentscroll;
});