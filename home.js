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
// Main section
// Parallax scroll
// 1st element

const parallax1 = document.querySelectorAll(`.parallax1`);

window.addEventListener(`scroll`, function () {
  let offset = this.window.pageYOffset;
  parallax1.forEach((item) => {
    item.style.backgroundPositionY = offset * -0.7 + `px`;
  });
  // console.log(`offset: ` + offset);
  // console.log(`offset modified: ` + offset * -0.2 + `px`);
});

//2nd element
const parallax2 = document.querySelectorAll(`.parallax2`);

window.addEventListener(`scroll`, function () {
  let offset = this.window.pageYOffset;
  parallax2.forEach((item) => {
    item.style.backgroundPositionY = offset * -0.1 + `px`;
  });
});
// console.log(`offset: ` + offset);
// console.log(`offset modified: ` + offset * -0.2 + `px`);

//3rd element
const parallax3 = document.querySelectorAll(`.parallax3`);

window.addEventListener(`scroll`, function () {
  let offset = this.window.pageYOffset;
  parallax3.forEach((item) => {
    item.style.backgroundPositionY = offset * -0.01 + `px`;
  });
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
