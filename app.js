const menu = [
    {
        id: 1,
        title: "bacon-egg-cheese",
        category: "breakfast",
        price: 8.99,
        img: "./images/bacon-egg-cheese.jpeg",
        desc: `Dive into a mountain of perfectly crispy bacon strips, cooked to golden perfection, and stacked high to create a bacon lover's paradise. Each bite is a crunchy, smoky delight that sets the stage for an unforgettable breakfast feast.`,
    },
    {
        id: 2,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/country-delight.jpeg",
        desc: `Embark on a rustic culinary journey with our Country Delight Breakfast, a hearty and comforting experience that captures the essence of the countryside. Begin your day on a delicious note with a platter filled with farm-fresh goodness and homestyle flavors.`,
    },
    {
        id: 3,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/buttermilk-pancakes.jpeg",
        desc: `Immerse yourself in the tantalizing aroma of freshly flipped pancakes as they sizzle on the griddle. Our secret ingredient? The rich and tangy buttermilk that imparts a delightful twist to the classic pancake experience. Each pancake is a canvas for the perfect balance of sweetness and a hint of buttery richness.`,
    },
    {
        id: 4,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/egg-attack.jpeg",
        desc: `Prepare your taste buds for a flavor assault with our Egg Attack Breakfast, a dynamic and delicious morning experience that puts eggs at the forefront of the culinary battlefield. Brace yourself for an explosion of taste as we redefine breakfast with an array of bold and savory creations.`,
    },
    {
        id: 5,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/diner-double.jpeg",
        desc: `Nestled between two toasted brioche buns, this double delight is adorned with layers of fresh, crisp lettuce, ripe tomatoes, and pickles that add a burst of freshness and crunch. The savory dance of melted cheese binds it all together, creating a mouthwatering masterpiece that's impossible to resist.`,
    },
    {
        id: 6,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/american-classic.jpeg",
        desc: `Join us for a journey through time with the American Classic Burger – a culinary icon that captures the essence of comfort and flavor in every mouthwatering bite. It's not just a meal; it's a celebration of the timeless flavors that make American cuisine truly unforgettable.`,
    },
    {
        id: 7,
        title: "sirlion steak",
        category: "dinner",
        price: 22.99,
        img: "./images/sirloin-steak.jpeg",
        desc: `Elevate your dining experience with the rich and robust flavors of our Grilled Sirloin Steak – a culinary masterpiece that takes you on a journey through the untamed wilderness. Savor the lean, tender cuts of premium bison meat, expertly grilled to perfection to showcase the natural richness and unique depth of this extraordinary protein.`,
    },
    {
        id: 8,
        title: "oreo flurry",
        category: "shakes",
        price: 18.99,
        img: "./images/oreo-flurry.jpeg",
        desc: `Indulge in the sweetest of reveries with our Oreo Flurry Milkshake – a velvety concoction that turns your dessert fantasies into reality. Immerse yourself in the dreamy world of cookies and cream with this decadent shake that's both luscious and satisfying.`,
    },
    {
        id: 9,
        title: "Strawberry milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/strawberry-milkshake.jpeg",
        desc: `For the ultimate strawberry lover, customize your experience with the option to add strawberry chunks for an extra burst of fruity goodness. Whether enjoyed on its own or as the perfect complement to a delightful meal, this milkshake is a refreshing oasis of sweetness that promises pure bliss in every sip.`,
    },
];

// Get containers
const btnContainer = document.querySelector(".btn-container");
const sectionCenter = document.querySelector(".section-center");

// Display menu buttons and all menu items when page loads
window.addEventListener("DOMContentLoaded", function () {
    displayMenuButtons();
    diplayMenuItems(menu);
});

// Display menu buttons
function displayMenuButtons() {

    // Stores all of the categories into array
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["All"] // Places "All" in front of array
    );

    // Creates a button for each category
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
    btnContainer.innerHTML = categoryBtns;

    // Get the buttons
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {

        // category will store the button's category
        const category = e.currentTarget.dataset.id;

        // menuCategory will store all items with this category
        const menuCategory = menu.filter(function (menuItem) {

          // Return the menu item if it has this category
          if (menuItem.category === category) {
            return menuItem;
          }
        });

        // If All btn is clicked, display all menu items
        if (category === "All") {
          diplayMenuItems(menu);
        // Else, display the menu items for the category
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
}
  
// Display menu items with their corresponding attributes
function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}