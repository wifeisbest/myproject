const showMenu = (toggId,navId) =>{
    const toggle = document.getElementById(toggId),
    nav = document.getElementById(navId)

    if(toggle && navId){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu');
// remove menu

const navLink = document.querySelectorAll('.nav__link');
const navMenu = document.getElementById('nav-menu');

function linkAction () {
    // active link
    navLink.forEach(n =>n.classList.remove('active'));
    this.classList.add('active');
    
    // remove menu
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click',linkAction));
