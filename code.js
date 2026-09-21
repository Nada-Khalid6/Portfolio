// =====================================================
// Mobile navigation toggle
// =====================================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close the mobile menu after a link is clicked
navMenu.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// =====================================================
// Highlight the current section in the nav while scrolling
// =====================================================
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
  let currentId = sections[0]?.id;
  const scrollPos = window.scrollY + 120;

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPos) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === `#${currentId}`);
  });
}

window.addEventListener('scroll', setActiveLink);
setActiveLink();

// =====================================================
// Contact form (front-end only — no backend attached)
//
// To make this form actually deliver messages, connect it to a
// form backend service such as Formspree (https://formspree.io)
// or EmailJS (https://www.emailjs.com). Typical steps:
//   1. Create a free account with the service and a form/endpoint.
//   2. Replace the fetch() call below with the service's snippet,
//      or set the <form> "action" attribute to the endpoint URL
//      and remove this JS handler so the form posts normally.
// =====================================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = 'Please fill in every field before sending.';
    return;
  }

  // No backend is connected yet — see the comment block above for
  // how to wire this up to a real email-sending service.
  formStatus.textContent = `Thanks, ${name}! This form isn't connected to a backend yet, so your message wasn't actually sent — see the setup notes in script.js.`;
  contactForm.reset();
});

// =====================================================
// Footer year
// =====================================================
document.getElementById('year').textContent = new Date().getFullYear();