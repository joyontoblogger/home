// এলিমেন্টগুলো সিলেক্ট করা
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const iconElement = menuIcon.querySelector('i');

// মেনু আইকনে ক্লিক করলে মেনু খুলবে/বন্ধ হবে
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // আইকন পরিবর্তন (Bars <-> X)
    if (navLinks.classList.contains('active')) {
        iconElement.classList.remove('fa-bars');
        iconElement.classList.add('fa-times');
    } else {
        iconElement.classList.remove('fa-times');
        iconElement.classList.add('fa-bars');
    }
});

// মেনুর কোনো লিঙ্কে ক্লিক করলে মেনু অটোমেটিক বন্ধ হয়ে যাবে
function closeMenu() {
    navLinks.classList.remove('active');
    iconElement.classList.remove('fa-times');
    iconElement.classList.add('fa-bars');
}