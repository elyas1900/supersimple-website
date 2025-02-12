const card = document.querySelector('.card');
const cardContainer = document.querySelector('.card-container');

cardContainer.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY, target } = e;
    const { offsetWidth: width, offsetHeight: height } = target;

    // محاسبه چرخش کارت بر اساس موقعیت موس
    const xRotation = ((offsetY / height) * 31) - 16; // چرخش در محور X
    const yRotation = ((offsetX / width) * 31) - 16; // چرخش در محور Y

    // کشیدگی کارت به سمت موس
    const xStretch = (offsetX / width) * 0.3; // کشیدگی در محور X
    const yStretch = (offsetY / height) * 0.3; // کشیدگی در محور Y

    // اعمال چرخش و کشیدگی
    card.style.transform = 'rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg) scale(' + (1 + xStretch) + ',' + (1 + yStretch) + ')';

    // تغییر رنگ‌ها بر اساس موقعیت موس
    const colorX = Math.round((offsetX / width) * 251);
    const colorY = Math.round((offsetY / height) * 251);
    card.style.backgroundColor = 'rgb(' + colorX + ',' + colorY + ',150)';  // ترکیب رنگ‌ها
});

cardContainer.addEventListener('mouseleave', () => {
    // زمانی که موس از کارت خارج می‌شود، کارت به حالت اولیه باز می‌گردد
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1, 1)';
    card.style.backgroundColor = '#2a2a2a';  // رنگ اولیه
});
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active');
});





document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden");
