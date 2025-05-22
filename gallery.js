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

// Scroll animation

window.addEventListener(`DOMContentLoaded`, setup);

function setup() {
  const options = {
    rootMargin: `0px -100px 0px 0px`,
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`gallery-card-show`);
        observer.unobserve(entry.target);
      } else {
        return;
      }
    });
  }, options);
  const galleryAppear = document.querySelectorAll(`.gallery-card`);
  galleryAppear.forEach((card) => {
    observer.observe(card);
  });
}

// Gallery-card click expand

const galleryCard = document.querySelectorAll(`.gallery-card`);
galleryCard.forEach((card) => {
  card.addEventListener(`mouseover`, (e) => {
    e.target.style.transform = `scale(1.2)`;
  });

  card.addEventListener(`mouseout`, (e) => {
    e.target.style.transform = `scale(1)`;
  });
});
