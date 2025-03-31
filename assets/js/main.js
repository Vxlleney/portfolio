// NAVBAR RESPONSIVE 
const btnNavMenu = document.querySelectorAll('#btn-nav-menu');
const navMenu    = document.querySelector('.nav-menu');

btnNavMenu.forEach((btn) => {
    btn.addEventListener('click', () => {
        navMenu.classList.toggle('hide');
    });
});


// CHANGE THEME

const fileSwitchTheme = document.querySelector('#file-theme');
applyTheme(detectTheme())

function detectTheme() {
    return (localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    // Si le localstorage Theme existe, on le return, sinon => Light
}

function switchTheme() {

    if (detectTheme() == 'dark') {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    applyTheme()
}

function applyTheme() {

    if (detectTheme() == 'dark') {
        fileSwitchTheme.href = "assets/css/styles_dark.css";
    } else {
        fileSwitchTheme.href = "assets/css/styles.css";
    }
}

function toggleTheme() {
    switchTheme()
    console.log("test");
}