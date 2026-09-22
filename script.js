/* =========================================================
   NADA KHALID PORTFOLIO
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  // ==============================
  // Mobile Navigation
  // ==============================

  const sidebar = document.getElementById("sidebar");
  const mobileMenu = document.getElementById("mobileMenu");

  mobileMenu?.addEventListener("click", () => {
    sidebar?.classList.toggle("open");

    const icon = mobileMenu.querySelector("i");

    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-xmark");
    }
  });


  // Close mobile menu after clicking a navigation link

  document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

      sidebar?.classList.remove("open");

      const icon = mobileMenu?.querySelector("i");

      if (icon) {
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-xmark");
      }

    });

  });


  // ==============================
  // Active Navigation Section
  // ==============================

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          navLinks.forEach(link => {
            link.classList.remove("active");
          });

          const activeLink = document.querySelector(
            `.nav-link[href="#${entry.target.id}"]`
          );

          activeLink?.classList.add("active");

        }

      });

    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0
    }
  );

  sections.forEach(section => {
    observer.observe(section);
  });


  // ==============================
  // Reveal Animation
  // ==============================

  const revealObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.08
    }
  );

  document.querySelectorAll(".reveal").forEach(element => {
    revealObserver.observe(element);
  });


  // ==============================
  // Certificates Slider
  // ==============================

  const certificateTrack =
    document.getElementById("certificateTrack");

  const certificatePrev =
    document.getElementById("certPrev");

  const certificateNext =
    document.getElementById("certNext");


  const scrollCertificates = (direction) => {

    if (!certificateTrack) return;

    const amount = Math.min(
      certificateTrack.clientWidth * 0.78,
      360
    );

    certificateTrack.scrollBy({
      left: direction * amount,
      behavior: "smooth"
    });

  };


  certificatePrev?.addEventListener("click", () => {
    scrollCertificates(-1);
  });


  certificateNext?.addEventListener("click", () => {
    scrollCertificates(1);
  });


  // ==============================
  // Certificate Modal
  // ==============================

  const modal =
    document.getElementById("certificateModal");

  const modalImage =
    document.getElementById("modalImage");

  const modalClose =
    document.getElementById("modalClose");

  const modalBackdrop =
    document.getElementById("modalBackdrop");


  document.querySelectorAll(".view-cert").forEach(button => {

    button.addEventListener("click", () => {

      const image = button.dataset.image;

      if (!image || !modal || !modalImage) return;

      modalImage.src = image;

      modal.classList.add("open");

      modal.setAttribute(
        "aria-hidden",
        "false"
      );

      document.body.style.overflow = "hidden";

    });

  });


  const closeModal = () => {

    if (!modal) return;

    modal.classList.remove("open");

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    if (modalImage) {
      modalImage.src = "";
    }

    document.body.style.overflow = "";

  };


  modalClose?.addEventListener(
    "click",
    closeModal
  );


  modalBackdrop?.addEventListener(
    "click",
    closeModal
  );


  // Close modal with Escape key

  document.addEventListener("keydown", event => {

    if (
      event.key === "Escape" &&
      modal?.classList.contains("open")
    ) {

      closeModal();

    }

  });


  // ==============================
  // Contact Form
  // ==============================

  const form =
    document.getElementById("contactForm");


  form?.addEventListener("submit", event => {

    event.preventDefault();

    const name =
      form.elements.name?.value.trim();


    if (!name) return;


    alert(
      `Thanks, ${name}! The contact form is currently a front-end demo. Connect a form service/backend to receive messages.`
    );


    form.reset();

  });

});