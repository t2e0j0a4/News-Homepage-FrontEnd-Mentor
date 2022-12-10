// All Scripts Here !!

// Navbar Menu Toggle for < 768px Screens.

let navigations = document.querySelector('.fem__navbar-links');

function menuToggled(toggle) {
    if (toggle === 'menu') {
        navigations.classList.add('fem__navbar-sm_right');
    }
    else {
        navigations.classList.remove('fem__navbar-sm_right');
    }
}

let main = document.querySelector('.fem__content');

main.addEventListener('mouseenter',()=>{
    navigations.classList.remove('fem__navbar-sm_right');
})