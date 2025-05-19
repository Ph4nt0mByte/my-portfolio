// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const message = formData.get('message');
        console.log('Form submitted:', { firstName, lastName, email, message });
        this.reset();
        alert('Thank you for your message! I will get back to you soon.');
    });
}
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');

//mobile menu toggle button
if (!document.querySelector('.mobile-menu-btn')) {
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = '☰';
    header.insertBefore(menuBtn, nav);

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
        menuBtn.innerHTML = nav.classList.contains('nav-open') ? '✕' : '☰';
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && nav.classList.contains('nav-open')) {
        nav.classList.remove('nav-open');
        document.querySelector('.mobile-menu-btn').innerHTML = '☰';
    }
});