// Menu //
const hMenu = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

hMenu.addEventListener('click', () => {
    hMenu.classList.toggle('is-active');
    menu.classList.toggle('menu-active');
});

// Feedback
const loadMore = document.querySelector('.lm-button');
let jumlahItem = 3;

loadMore.addEventListener('click', () => {
    let boxes = [...document.querySelectorAll('.f-box .box')];
    for (let i = jumlahItem; i < jumlahItem + 3; i++) {
        boxes[i].style.display = 'inline-block';
    }

    jumlahItem += 3;

    if (jumlahItem >= boxes.length) {
        loadMore.style.display = 'none'
    }
});