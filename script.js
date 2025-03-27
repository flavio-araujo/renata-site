document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navContent = document.querySelector('.nav-content');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navContent.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-content a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navContent.classList.remove('active');
        });
    });
}); 