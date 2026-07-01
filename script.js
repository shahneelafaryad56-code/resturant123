// Smooth Scrolling
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navHeight = document.getElementById('navbar').offsetHeight;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        
        window.scrollTo({
            top: targetPos,
            behavior: 'smooth'
        });
    });
});

// Active Nav Link
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const navHeight = document.getElementById('navbar').offsetHeight;

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - navHeight - 20) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent to the Shifa team.');
    this.reset();
});

// Image Fallback (No Broken Images!)
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.src = `https://via.placeholder.com/${this.width}x${this.height}?text=SHIFA`;
        this.alt = 'Shifa Restaurant';
    });
});