// Selectarea elementelor
const openMenuButton = document.querySelector('[data-open-menu]');
const closeMenuButton = document.querySelector('[data-close-menu]');
const menu = document.querySelector('[data-menu]');
const button = document.querySelector('.order-button');
const backdrop = document.querySelector('[data-backdrop]');
const modalCloseButton = document.querySelector('[data-close-modal]');

// Funcția de toggle pentru meniu
function toggleMenu() {
    menu.classList.toggle('is-open');
}

// Funcția de toggle pentru modal
function toggleModal() {
    backdrop.classList.toggle("is-open");
}

// Adăugarea evenimentelor pentru butoane
if (openMenuButton) {
    openMenuButton.addEventListener('click', toggleMenu);
}

if (closeMenuButton) {
    closeMenuButton.addEventListener('click', toggleMenu);
}

if (button) {
    button.addEventListener('click', toggleModal);
}

// Închiderea modalului atunci când se dă click pe fundal
if (backdrop) {
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
            toggleModal();
        }
    });
}

// Închiderea modalului atunci când se dă click pe butonul de închidere
if (modalCloseButton) {
    modalCloseButton.addEventListener('click', () => {
        console.log("Modal close button clicked");
        toggleModal();
    });
} else {
    console.log("Modal close button not found");
}