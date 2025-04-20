// Smooth scrolling for navbar links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

        // Active class toggle for navbar items
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Typing animation with repeat for both "khasimvali" and "Developer"
const typeText = (element, text, speed, repeat = false) => {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (repeat) {
            setTimeout(() => {
                element.innerHTML = ''; // Clear text
                i = 0; // Reset index
                type(); // Start again
            }, 1000); // Delay before restarting
        }
    }
    type();
};

const nameElement = document.querySelector('.element');
const roleElement = document.querySelector('.element2');
typeText(nameElement, 'YENUGONDA SRINIVASULU', 150, true); // Name repeats


// Skill section hover effects
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.style.transform = 'scale(1.05)';
        skill.style.transition = 'transform 0.3s ease-in-out';
        skill.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
    skill.addEventListener('mouseleave', () => {
        skill.style.transform = 'scale(1)';
        skill.style.boxShadow = 'none';
    });
});

// Certificate button animation
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'rotate(5deg) scale(1.1)';
        button.style.transition = 'transform 0.3s ease';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'rotate(0deg) scale(1)';
    });
});

// Form submission feedback
const form = document.querySelector('.contact-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitButton = form.querySelector('#button');
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    const formData = new FormData(form);
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            form.reset();
            submitButton.textContent = 'Sent!';
            setTimeout(() => {
                submitButton.textContent = 'Send Message';
                submitButton.disabled = false;
            }, 2000);
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        submitButton.textContent = 'Error!';
        setTimeout(() => {
            submitButton.textContent = 'Send Message';
            submitButton.disabled = false;
        }, 2000);
    }
});

// Scroll reveal animation for sections
const revealElements = document.querySelectorAll('.aboutme, .skill, .section, .contact-form');
const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('revealed');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check