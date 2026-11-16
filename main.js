 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const body = document.body;

 
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
});

 
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});





 
const newsletterForm = document.getElementById('newsletterForm');
const newsletterInputGroup = document.getElementById('newsletterInputGroup');
const newsletterEmail = document.getElementById('newsletterEmail');
const newsletterMessage = document.getElementById('newsletterMessage');

 
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop default form submission

    const emailValue = newsletterEmail.value.trim();

 
    newsletterInputGroup.classList.remove('error-shake');
    newsletterMessage.className = 'form-message'; // reset classes

 
    if (emailValue === '') {
        showValidationMessage('error', 'Oops! Please enter an email address.');
        triggerErrorAnimation();
    } else if (!emailRegex.test(emailValue)) {
        showValidationMessage('error', 'Please enter a valid email (e.g., name@domain.com).');
        triggerErrorAnimation();
    } else {
 
        showValidationMessage('success', 'Thanks for subscribing! Check your inbox soon.');
        newsletterEmail.value = ''; // Clear input field after success
        
 
        setTimeout(() => {
            newsletterMessage.classList.remove('show');
        }, 4000);
    }
});

 
function showValidationMessage(type, message) {
    newsletterMessage.classList.add(type, 'show');
    
 
    if (type === 'error') {
        newsletterMessage.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${message}`;
    } else {
        newsletterMessage.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
    }
}

 
function triggerErrorAnimation() {
    newsletterInputGroup.classList.add('error-shake');
    
 
    setTimeout(() => {
        newsletterInputGroup.classList.remove('error-shake');
    }, 500);
}