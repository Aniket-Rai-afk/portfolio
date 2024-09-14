// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover effect for internships, projects, and responsibilities
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        const description = this.querySelector('.description');
        description.style.opacity = 1;
        description.style.maxHeight = '150px';
    });

    card.addEventListener('mouseleave', function() {
        const description = this.querySelector('.description');
        description.style.opacity = 0;
        description.style.maxHeight = '0';
    });
});

// Animated background (optional)
function createStar() {
    console.log('Creating star');
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.top = `${Math.random() * window.innerHeight}px`;
    star.style.animationDuration = `${Math.random() * 5 + 3}s`; // Random duration for twinkling effect
    star.style.opacity = Math.random();

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove(); // Remove stars after their animation finishes
    }, 8000); // 8 seconds is the max animation time
}

setInterval(createStar, 500); // Create a new star every 0.5 seconds

