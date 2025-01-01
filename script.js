// JavaScript for smooth scrolling and hover effects

// Initialize EmailJS
(function() {
    emailjs.init("xATAgyOVojGwazKYY"); // Replace 'your_user_id' with your EmailJS User ID
})();

// Handle form submission for the contact form
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

    emailjs.send("service_rjgokp7", "template_9fwns5e", data) // Replace placeholders with actual IDs
        .then(
            function(response) {
                document.getElementById("success-message").classList.remove("hidden");
                document.getElementById("contact-form").reset();
            },
            function(error) {
                alert("Failed to send the message. Please try again.");
            }
        );
});

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

// Handle "Know More" button and popup functionality
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    // Select elements within the card
    const knowMoreButton = card.querySelector('.know-more-button');
    const popup = card.querySelector('.popup');
    const closePopupButton = card.querySelector('.close-popup');
    const description = card.querySelector('.description');

    if (knowMoreButton && popup && closePopupButton) {
        // Show the popup on "Know More" button click
        knowMoreButton.addEventListener('click', () => {
            if (description) {
                description.style.opacity = 1;
                description.style.maxHeight = '150px';
            }
            popup.classList.remove('hidden');
        });

        // Hide the popup on "Close" button click
        closePopupButton.addEventListener('click', () => {
            popup.classList.add('hidden');
            if (description) {
                description.style.opacity = 0;
                description.style.maxHeight = '0';
            }
        });

        // Hide the popup if clicking outside of it
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.add('hidden');
                if (description) {
                    description.style.opacity = 0;
                    description.style.maxHeight = '0';
                }
            }
        });
    }
});

