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

// Main
// In the EVENT OF MENU CHANGE UPDATE HERE -----------------------------------------
const eur = "&euro;";

const menuItems = [
  {
    category: "Main Courses",
    name: "Grilled Ribeye Steak",
    description: "Served with rosemary butter and garlic mashed potatoes",
    price: `${eur} 24.99`,
  },
  {
    category: "Main Courses",
    name: "Chicken Breast in Clay",
    description: "Served with parsley- mushroom risotto",
    price: `${eur} 24.99`,
  },
  {
    category: "Desserts",
    name: "Molten Chocolate Lava Cake",
    description: "Served with vanilla ice cream",
    price: `${eur} 9.99`,
  },
  {
    category: "Wine Selection",
    name: "Cabernet Sauvignon",
    description: "Bold and full-bodied",
    price: `${eur} 7.99 per glass`,
  },
  {
    category: "Cocktails & Spirits",
    name: "Old Fashioned",
    description: "Whiskey, bitters, sugar, orange peel",
    price: `${eur} 10.99`,
  },
  {
    category: "Soft Drinks",
    name: "Fresh Lemonade",
    description: "Refreshing homemade lemonade",
    price: `${eur} 4.99`,
  },

  {
    category: "Desserts",
    name: "Swiss Roll",
    description: "Served with vanilla ice cream",
    price: `${eur} 9.99`,
  },
];
// ------------------------- UPDATE ABOVE -----------------------------
const menuContainer = document.querySelector(".menu");
const categories = {}; // Store items by category

// Group items by category
menuItems.forEach((item) => {
  if (!categories[item.category]) {
    categories[item.category] = [];
  }
  categories[item.category].push(item);
});

// Create category sections dynamically
Object.keys(categories).forEach((category) => {
  const section = document.createElement("section");
  section.classList.add("menu-category");
  section.innerHTML = `<h2>${category}</h2>`;

  categories[category].forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("menu-item");
    div.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><span>${item.price}</span>`;
    section.appendChild(div);
  });

  menuContainer.appendChild(section);
});

// Menu items intersection observer

window.addEventListener(`DOMContentLoaded`, setup);

function setup() {
  const options = {
    rootMargin: `0px 0px -120px 0px`,
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(`show-menu-item`);
        observer.unobserve(entry.target);
      } else {
        return;
      }
    });
  }, options);
  const menuAppear = document.querySelectorAll(`.menu-item`);
  menuAppear.forEach((item) => observer.observe(item));
}
