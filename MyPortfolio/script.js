document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in');
    
    const options = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Smooth scroll to sections
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
// Dark Mode Toggle
const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;
const toggleIcon = document.getElementById('toggle-icon');
let btn=document.getElementById('name');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('dark-mode')) {
        toggleIcon.classList.remove('fa-toggle-off');
        toggleIcon.classList.add('fa-toggle-on');
    
        
    } else {
        toggleIcon.classList.remove('fa-toggle-on');
        toggleIcon.classList.add('fa-toggle-off');
    }
});
