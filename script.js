// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const hash = this.getAttribute('href');
    if (hash.length > 1 && document.querySelector(hash)) {
      e.preventDefault();
      document.querySelector(hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Responsive Nav: Collapse on mobile (optional for further extension)

// FAQ Section: Only one open at a time (optional, for accordion effect)
const faqCards = document.querySelectorAll('.faq-cards details');
faqCards.forEach((card, idx) => {
  card.addEventListener('toggle', function () {
    if (card.open) {
      faqCards.forEach((other, i) => {
        if (other !== card) other.open = false;
      });
    }
  });
});

// Contact form handler (simple, client-side only)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Simple validation
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();
      if (!email || !message) {
        alert('Please fill in both your email and message.');
        return;
      }
      // Simulate send (for demo)
      form.reset();
      alert('Thank you for contacting StellarSpace! We will get back to you soon.');
    });
  }
});