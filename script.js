let title = document.getElementById('text')
let logo = document.getElementById('logo')
let menus = document.getElementsByClassName('menu-list')
let para = document.getElementById('p')
let nav = document.getElementById('nav')
// console.log(menus[0]);

document.addEventListener('scroll', function(){
    var value = window.scrollY
    title.style.marginBottom = value * 2 + 'px'
    if(value >= 150){
        nav.classList.add('fixed')
        // logo.classList.remove('navLogo')
        logo.classList.add('modifiedLogo')
        for (let i = 0; i < menus.length; i++) {
            menus[i].classList.add('menu-list-dark')
        }
    }
    else{
        nav.classList.remove('fixed')
        logo.classList.remove('modifiedLogo')
        logo.classList.add('navLogo')
        for (let i = 0; i < menus.length; i++) {
            menus[i].classList.remove('menu-list-dark')
            menus[i].classList.add('menu-list')
        }
    }
})