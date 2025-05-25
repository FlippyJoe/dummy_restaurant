// Controlling navbar

const openMenuBtn = document.querySelector(`.openMenuBtn`);
const closeMenuBtn = document.querySelector(`.closeMenuBtn`);
const navbar = document.querySelector(`nav`);

openMenuBtn.addEventListener(`click`, () => {
  closeMenuBtn.style.display = `block`;
  openMenuBtn.style.display = `none`;
  navbar.style.marginTop = `-50px`;
});

closeMenuBtn.addEventListener(`click`, () => {
  closeMenuBtn.style.display = `none`;
  openMenuBtn.style.display = `block`;
  navbar.style.marginTop = `-100%`;
});

// Main text intersection observer

window.addEventListener(`DOMContentLoaded`, setup);

function setup() {
  const options = {
    rootMargin: `0px 0px -200px 0px`,
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`show`);
        observer.unobserve(entry.target);
      } else {
        return;
      }
    });
  }, options);
  const textAppear = document.querySelectorAll(`.textAppear`);
  textAppear.forEach((item) => observer.observe(item));
}

// Testimonials intersection observer

window.addEventListener(`DOMContentLoaded`, setupTestimonials);

function setupTestimonials() {
  const options = {
    rootMargin: `0px 0px -200px 0px`,
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`show-testimonial`);
        observer.unobserve(entry.target);
      } else {
        return;
      }
    });
  }, options);
  const testimonialAppear = document.querySelectorAll(`.testimonial-text`);
  testimonialAppear.forEach((item) => observer.observe(item));
}
