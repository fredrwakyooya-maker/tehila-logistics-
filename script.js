/* ───────────────────────────────────────────────── */
/* TEHILA INTERNATIONAL LOGISTICS - JAVASCRIPT      */
/* ───────────────────────────────────────────────── */

// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close mobile nav when a link is clicked
const navAnchors = navLinks?.querySelectorAll('a');
navAnchors?.forEach(anchor => {
  anchor.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// Scroll Reveal Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach(el => observer.observe(el));

// Form Handling
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      company: document.getElementById('company').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      service: document.getElementById('service').value,
      message: document.getElementById('message').value,
      timestamp: new Date().toISOString()
    };

    console.log('Form submitted:', formData);

    // Option 1: Send to backend API (uncomment and configure)
    /*
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Quote request sent! We\'ll contact you within 2 business hours.');
        contactForm.reset();
      } else {
        alert('Error sending form. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Network error. Please try again.');
    }
    */

    // Option 2: Use Formspree (free service)
    /*
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Quote request sent successfully! We\'ll contact you within 2 business hours.');
        contactForm.reset();
      } else {
        alert('There was an error. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please try again.');
    }
    */

    // Option 3: Email via JavaScript (requires backend)
    /*
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          to: 'tehilalogisticsltd@aol.com',
          subject: `New Quote Request from ${formData.name}`,
          html: `
            <h2>New Quote Request</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Service:</strong> ${formData.service}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message}</p>
          `
        })
      });
      
      if (response.ok) {
        alert('Quote request sent! We\'ll contact you within 2 business hours.');
        contactForm.reset();
      }
    } catch (error) {
      console.error('Error:', error);
    }
    */

    // For now, just show a success message
    alert('Thank you! Your quote request has been received.\nWe\'ll contact you within 2 business hours.\n\nPhone: +256 702 206 320\nEmail: tehilalogisticsltd@aol.com');
    contactForm.reset();
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('main-nav');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(8, 17, 42, 0.98)';
  } else {
    navbar.style.background = 'rgba(8, 17, 42, 0.92)';
  }
});

// Log environment info
console.log('Tehila International Logistics Ltd - Website Loaded');
console.log('Contact: +256 702 206 320 | Email: tehilalogisticsltd@aol.com');
