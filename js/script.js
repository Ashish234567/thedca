// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Scroll smoothly to the targeted section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form validation and success message
const contactForm = document.getElementById('contact-form');
const errorMessage = document.getElementById('form-error-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validate form inputs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let formValid = true;
        let errors = [];

        // Validation checks
        if (name === '') {
            errors.push("Please enter your name.");
            formValid = false;
        }

        if (email === '' || !validateEmail(email)) {
            errors.push("Please enter a valid email address.");
            formValid = false;
        }

        if (message === '') {
            errors.push("Please enter a message.");
            formValid = false;
        }

        // If form is valid, show success message
        if (formValid) {
            alert("Thank you for your message! We will get back to you soon.");
            contactForm.reset();
        } else {
            // Display errors
            displayErrors(errors);
        }
    });
}

// Function to display error messages
function displayErrors(errors) {
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error-container');
    errorContainer.innerHTML = '<ul>' + errors.map(error => `<li>${error}</li>`).join('') + '</ul>';
    if (errorMessage) {
        errorMessage.innerHTML = '';
        errorMessage.appendChild(errorContainer);
    }
}

// Simple email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// Toggle mobile navigation menu (if applicable)
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}
