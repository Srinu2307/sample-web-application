// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation for contact page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            let isValid = true;
            
            // Validate name field
            const nameInput = document.getElementById('name');
            if (nameInput.value.trim() === '') {
                nameInput.classList.add('error');
                document.getElementById('nameError').textContent = 'Name is required';
                isValid = false;
            } else {
                nameInput.classList.remove('error');
                document.getElementById('nameError').textContent = '';
            }

            // Validate email field
            const emailInput = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailInput.classList.add('error');
                document.getElementById('emailError').textContent = 'Please enter a valid email';
                isValid = false;
            } else {
                emailInput.classList.remove('error');
                document.getElementById('emailError').textContent = '';
            }

            // Validate message field
            const messageInput = document.getElementById('message');
            if (messageInput.value.trim().length < 10) {
                messageInput.classList.add('error');
                document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
                isValid = false;
            } else {
                messageInput.classList.remove('error');
                document.getElementById('messageError').textContent = '';
            }

            if (!isValid) {
                e.preventDefault();
            }
        });
    }

    // Recipe card hover effects
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.recipe-overlay').classList.add('opacity-100');
        });
        card.addEventListener('mouseleave', function() {
            this.querySelector('.recipe-overlay').classList.remove('opacity-100');
        });
    });
});