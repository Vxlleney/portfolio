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

// =================== PAGE A PROPOS ==================== //
const buttonsDropdown = document.querySelectorAll('.btn-view-dropdown');

buttonsDropdown.forEach(button => {
    button.addEventListener('click', () => {
        const container = button.closest('.button-dropdown');
        const menu = container.querySelector('.content-dropdown');
        
        // Fermer tous les autres menus et remettre toutes les icônes à angle-down
        document.querySelectorAll('.content-dropdown').forEach(otherMenu => {
            if (otherMenu !== menu) {
                otherMenu.classList.remove('active');
            }
        });
        buttonsDropdown.forEach(otherBtn => {
            if (otherBtn !== button) {
                otherBtn.classList.remove('uil-angle-up');
                otherBtn.classList.add('uil-angle-down');
            }
        });

        // Toggle le menu du bouton cliqué
        menu.classList.toggle('active');

        // Change l'icône du bouton cliqué selon l'état du menu
        button.classList.toggle('uil-angle-down');
        button.classList.toggle('uil-angle-up');
    });
});

// =================== OPEN & CLOSE MISSIONS ==================== //
/*
const modalMission = document.querySelector('.modal-exp-missions');
const btnCloseModal = document.querySelector('.close-missions');
const portfolio = document.querySelector('.portfolio');
const btnViewMission = document.querySelectorAll('.btn-view-missions')

btnCloseModal.addEventListener('click', () => {
    portfolio.classList.toggle('blur');
    modalMission.classList.toggle('active');
} )

btnViewMission.forEach((button) => {
    button.addEventListener('click', () => {
        portfolio.classList.toggle('blur')
        modalMission.classList.toggle('active')
    })
})*/