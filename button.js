// گرفتن دکمه تغییر مود
const themeToggle = document.getElementById("theme-toggle");

// چک کردن وضعیت ذخیره شده مود در مرورگر
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.querySelector('.sun').style.opacity = 0;
    themeToggle.querySelector('.moon').style.opacity = 1;
} else {
    document.body.classList.remove('light-mode');
    themeToggle.querySelector('.sun').style.opacity = 1;
    themeToggle.querySelector('.moon').style.opacity = 0;
}

// تنظیم تغییر مود در زمان کلیک
themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');

    // ذخیره کردن تنظیمات مود در localStorage
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggle.querySelector('.sun').style.opacity = 0;
        themeToggle.querySelector('.moon').style.opacity = 1;
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggle.querySelector('.sun').style.opacity = 1;
        themeToggle.querySelector('.moon').style.opacity = 0;
    }
});








