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

// greeting

const nameInput = document.getElementById(`customer-first-name`);
const greeting = document.querySelector(`.greeting`);

nameInput.addEventListener(`input`, () => {
  let name = nameInput.value.trim();

  if (name.length > 0) {
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    greeting.textContent = `Hello ${name}, thank you for your reservation with us!`;
    // greeting.style.backgroundColor = `rgba(236, 134, 17, 0.754)`;
  } else {
    greeting.textContent = `Please fill in the form below`;
    greeting.style.backgroundColor = `transparent`;
  }
});

// Time of booking
document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("date-of-booking");
  dateInput.addEventListener("focus", function () {
    this.type = "date";
  });
  dateInput.addEventListener("blur", function () {
    if (!this.value) {
      this.type = "text";
      this.placeholder = "dd/mm/yyyy";
    }
  });
});

const dateOfBooking = document.getElementById(`date-of-booking`);
document
  .getElementById("time-of-booking")
  .addEventListener("input", function () {
    let bookingDate = document.getElementById(`date-of-booking`).value;
    let bookingTime = document.getElementById("time-of-booking").value;
    let message = document.getElementById("time-confirm");

    let openingHour = "10:00";
    let closingHour = "22:00";

    if (!bookingTime) {
      message.textContent = "Please select a time.";
      message.style.color = "blue";
      message.style.textShadow = "-1px 1px 1px red";

      return;
    }

    if (bookingTime >= openingHour && bookingTime <= closingHour) {
      message.textContent =
        "Your reservation is set for " +
        bookingDate +
        ", " +
        bookingTime +
        ". After submitting the form, we will get back to you with the confirmation. Thank you!";
      message.style.color = "white";
      message.style.textShadow = "-1px 1px 1px green";
    } else {
      message.textContent = "Please choose a time between 10:00 AM - 09:30 PM.";
      message.style.color = "white";
      message.style.textShadow = "-1px 1px 1px red";
    }
  });

// Diet- and celebration display change

// Celebration
const specialCheckBox = document.querySelector(`.special-requirements-box`);

const specialRequirementsArea = document.querySelector(`.special-requirements`);

specialCheckBox.addEventListener(`change`, () => {
  // console.log(`check`);
  if (specialCheckBox.checked) {
    specialRequirementsArea.style.opacity = `1`;
    specialRequirementsArea.style.transform = `translateY(0px)`;
  } else {
    // console.log(`unchecked`);
    specialRequirementsArea.style.opacity = `0`;
    specialRequirementsArea.style.transform = `translateY(-10px)`;
  }
});

// Checkbox default
document.addEventListener("DOMContentLoaded", function () {
  specialCheckBox.checked = false; // Ensures it's unchecked
});

// Preferred seat

// document.addEventListener("DOMContentLoaded", function () {
//   const contactForm = document.querySelector(".contact-form");
//   const radioButtons = document.querySelectorAll('input[name="seat"]'); // Selects radio buttons by name attribute

//   // Set default background image when the page loads
//   contactForm.style.backgroundImage = "url('mainBckgi.jpg')";

//   // Add event listeners for real-time background change
//   radioButtons.forEach((radio) => {
//     radio.addEventListener("change", function () {
//       if (this.value === "indoor") {
//         contactForm.style.backgroundImage = "url('mainBckgi.jpg')";
//       } else if (this.value === "outdoor") {
//         contactForm.style.backgroundImage = "url('garden.jpeg')";
//       }
//     });
//   });
// });

// Intersection observer

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
  const labels = document.querySelectorAll(`label`);
  labels.forEach((label) => observer.observe(label));

  const inputs = document.querySelectorAll(`input`);
  inputs.forEach((input) => observer.observe(input));

  const dateTime = document.querySelectorAll(`.date-of-booking-section`);
  dateTime.forEach((input) => observer.observe(input));

  const messages = document.querySelectorAll(`.spec-request-text`);
  messages.forEach((message) => observer.observe(message));
  console.log(messages);

  // ---- Indoor- and outdoor- seat
  const indoorSeat = document.querySelector(`.indoor-seat`);
  observer.observe(indoorSeat);

  const outdoorSeat = document.querySelector(`.outdoor-seat`);
  observer.observe(outdoorSeat);
}
