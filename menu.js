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
// Select the container element where menu sections will be injected
const menu = document.querySelector(".menu");

// Create an object to group menu items by their category
const menuCat = {};

// Define the desired display order of the menu categories
const customOrder = [
  "Starter",
  "Main",
  "Dessert",
  "Coffee",
  "Spirit",
  "Wine",
  "Soft Drink",
];

// Fetch the menu data from the JSON file
fetch("menu.json")
  // Convert response to JSON format if request is successful
  .then((response) => {
    if (!response.ok)
      // Throw custom error if fetch response is not ok
      throw new Error("Get on a diet today and come back tomorrow");
    return response.json();
  })
  // Once parsed, process the menu items
  .then((menuItems) => {
    // Loop through each menu item and sort it into its respective category
    menuItems.forEach((item) => {
      if (!menuCat[item.category]) {
        // If category doesn't exist yet, create a new array for it
        menuCat[item.category] = [];
      }
      // Add the item to the appropriate category array
      menuCat[item.category].push(item);
    });

    // Render menu sections in the defined category order
    customOrder.forEach((category) => {
      const section = document.createElement("section");
      section.classList.add("menu-category");
      section.innerHTML = `<h2>${category}</h2>`;

      // Sort items within the category alphabetically by name
      menuCat[category].sort((a, b) => a.item_name.localeCompare(b.item_name));

      // Create and append each menu item to the section
      menuCat[category].forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("menu-item");
        div.innerHTML = `<h3>${item.item_name}</h3> <p>${item.item_description}</p> <span>€${item.price}</span>`;
        section.appendChild(div);
      });

      // Append the complete category section to the main menu container
      menu.appendChild(section);

      // Intersection observer
      const items = document.querySelectorAll("h3"); // Item names
      const categories = document.querySelectorAll("h2"); // Category names

      const menuObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            } else {
              entry.target.classList.remove("show");
            }
          });
        },
        { threshold: 0.9 }
      );

      items.forEach((item) => menuObserver.observe(item));
      categories.forEach((category) => menuObserver.observe(category));
    });
  })
  // Catch and log any fetch or parsing errors
  .catch((error) => console.error(error));
