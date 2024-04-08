/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let titles = [
  "Fresh Prince of Bel Air",
  "Curb Your Enthusiasm",
  "East Los High",
];

// Arrays

let cartItems = [];
let allItems = [];

function Item(name, rating, brand, cost, description, image, type) {
  this.name = name;
  this.rating = rating;
  this.brand = brand;
  this.cost = cost;
  this.description = description;
  this.image = image;
  this.type = type;
}

// getters
function getName() {
  return this.name;
}

function getRating() {
  return this.rating;
}

function getBrand() {
  return this.brand;
}

function getCost() {
  return this.cost;
}

function getDescription() {
  return this.description;
}

function getImage() {
  return this.image;
}

// setters
function setName(name) {
  this.name = name;
}

function setRating(rating) {
  this.rating = rating;
}

function setBrand(brand) {
  this.brand = brand;
}

function setCost(cost) {
  this.cost = cost;
}

function setDescription(description) {
  this.description = description;
}

function setImage(image) {
  this.image = image;
}

let acousticGuitars = [
  {
    name: "Gibson J-45 Standard Rosewood Acoustic-Electric Guitar Rosewood Burst",
    rating: 4.7,
    brand: "Gibson",
    cost: 3999.0,
    description:
      "The J-45 is Gibson's best-selling acoustic of all time. Nicknamed 'The Workhorse' and first introduced in 1942, this iconic acoustic has become the cornerstone of its round-shoulder, dreadnought line. World renowned for its full, balanced expression, warm bass, and excellent projection, the J-45 has been refined to carry this legacy to new heights.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/M09011000001000-00-600x600.jpg",
    type: "acoustic-guitar",
  },

  {
    name: "Taylor 414ce V-Class Special-Edition Grand Auditorium Acoustic-Electric Guitar Shaded Edge Burst",
    rating: 4.9,
    brand: "Taylor",
    cost: 3099.0,
    description:
      "The 414ce V-Class Special-Edition Grand Auditorium acoustic-electric guitar from Taylor offers musicians an ideal blend of powerful tone and accessible playing comfort. Built with a timeless combination of tonewoods—including a Sitka spruce top, and Indian rosewood back and sides—the 414ce produces iconic acoustic timbre that’s powerful, articulate and harmonically complex. Innovative V-Class bracing further optimizes the guitar's unforgettable sound, which also amplifies naturally using custom Expression System 2 electronics. The Taylor 414ce is a responsive acoustic-electric that feels, sounds and looks fantastic.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L26331000001000-00-600x600.jpg",
    type: "acoustic-guitar",
  },

  {
    name: "Martin Special 000-X1AE Style Acoustic-Electric Guitar Natural",
    rating: 4.5,
    brand: "Martin",
    cost: 649.0,
    description:
      "The Martin Special 000-X1AE Style acoustic-electric guitar combines over 180 years of craftsmanship with modern innovation. This balanced auditorium-sized Martin acoustic-electric features a solid Sitka spruce top with a customized rosette and durable, eco-friendly high-pressure laminate back and sides with a figured rosewood pattern. The strong mahogany neck and Richlite fingerboard deliver fast, even playability across the neck. Reliable Fishman MX electronics allow you to plug in to any amp or mixing board. is proud to offer the legendary Martin tone and feel you know and love at an accessible price in the Special 000-X1AE.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L76820000001000-00-600x600.jpg",
    type: "acoustic-guitar",
  },

  {
    name: "Martin Special X Style 000 Cutaway Acoustic-Electric Guitar Black",
    rating: 4.0,
    brand: "Martin",
    cost: 589.99,
    description:
      "The Martin Special X Style 000 cutaway acoustic-electric guitar is a performance-focused acoustic-electric guitar combining Martin's time-honored craftsmanship with modern electronics for an instrument ideal for live playing or recording. Its stylish black satin finish and cutaway body give it a daring look, while its solid Jett Black HPL top, back and sides provide full, resonant tone. Easy playability comes courtesy of its slim neck and low action. Plug in the Fishman MX electronics to amplify your sound with studio-quality detail. Whether you're gigging at a local venue or laying down tracks in a professional studio, the Special X Style 000 will make you the star of the show.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L66003000001000-00-600x600.jpg",
    type: "acoustic-guitar",
  },

  {
    name: "Taylor 214e DLX Grand Auditorium Acoustic-Electric Guitar Tobacco Sunburst",
    rating: 5.0,
    brand: "Taylor",
    cost: 1499.0,
    description:
      "The 214e Deluxe Grand Auditorium Acoustic-Electric Guitar is a professional-grade instrument incorporating innovative design and premium components for flawless plugged-in performance and rich, balanced acoustic tone. At the heart of the 214e Deluxe is a solid Sitka spruce top paired with layered rosewood back and sides, a combination that produces crisp highs, focused midrange and robust low end. Onboard ES2 electronics faithfully amplify the guitar's acoustic voice and provide flexible tone shaping for any live or studio application. With deluxe appointments like white binding, abalone inlays and a high-gloss finish, the 214e Deluxe is as stunning to look at as it is to play.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L18959000001000-00-600x600.jpg",
    type: "acoustic-guitar",
  },
];


function showInstruments() {
  const cardContainer = document.getElementById("item-card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".item-card");
  console.log(templateCard);

  for (let i = 0; i < allItems.length; i++) {
    let item = allItems[i];
    
    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(
      nextCard,
      item.getName(),
      item.getRating(),
      item.getCost(),
      item.getImage()
    ); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

// function editCardContent(card, name, rating, cost, newImageURL) {
//   card.style.display = "block";

//   const cardName = card.querySelector("h2");
//   cardName.textContent = name;

//   const cardRating = card.querySelector("h2:nth-of-type(2)");
//   const cardCost = card.querySelector("h2:nth-of-type(3)");
//   const cardImage = card.querySelector("img");
//   cardRating.textContent = rating;
//   cardCost.textContent = cost;
//   cardImage.src = newImageURL;
//   cardImage.alt = name + " Image";

//   // You can use console.log to help you debug!
//   // View the output by right clicking on your website,
//   // select "Inspect", then click on the "Console" tab
// }


// function showInstruments() {
//   const itemContainer = document.getElementById("item-container");
//   itemContainer.innerHTML = ""; // Clear the container before adding new items

//   // Loop through each instrument object in the array
//   for (let i = 0; i < allItems.length; i++) {
//     // Create HTML elements for each instrument
//     const instrumentDiv = document.createElement("div");
//     instrumentDiv.classList.add("item");

//     const instrumentContent = document.createElement("div");
//     instrumentContent.classList.add("item-content");

//     const instrumentName = document.createElement("h2");
//     instrumentName.textContent = allItems[i].getName();

//     const instrumentImage = document.createElement("img");
//     instrumentImage.src = allItems[i].getImage();
//     instrumentImage.alt = allItems[i].getName();

//     const instrumentDescription = document.createElement("p");
//     instrumentDescription.textContent = allItems[i].getDescription();

//     // Append the elements to the container
//     instrumentContent.appendChild(instrumentName);
//     instrumentContent.appendChild(instrumentImage);
//     instrumentContent.appendChild(instrumentDescription);
//     instrumentDiv.appendChild(instrumentContent);
//     itemContainer.appendChild(instrumentDiv);
//   }
// }

function appendAllInstruments() {
  for (let i = 0; i < acousticGuitars.length; i++) {
    allItems.push(acousticGuitars[i]);
  }
}

// On Page Load
document.addEventListener("DOMContentLoaded", showInstruments);
document.addEventListener("DOMContentLoaded", appendAllInstruments);

// // This function adds cards the page to display the data in the array
// function showCards() {
//     const cardContainer = document.getElementById("card-container");
//     cardContainer.innerHTML = "";
//     const templateCard = document.querySelector(".card");

//     for (let i = 0; i < titles.length; i++) {
//         let title = titles[i];

//         // This part of the code doesn't scale very well! After you add your
//         // own data, you'll need to do something totally different here.
//         let imageURL = "";
//         if (i == 0) {
//             imageURL = FRESH_PRINCE_URL;
//         } else if (i == 1) {
//             imageURL = CURB_POSTER_URL;
//         } else if (i == 2) {
//             imageURL = EAST_LOS_HIGH_POSTER_URL;
//         }

//         const nextCard = templateCard.cloneNode(true); // Copy the template card
//         editCardContent(nextCard, title, imageURL); // Edit title and image
//         cardContainer.appendChild(nextCard); // Add new card to the container
//     }
// }

// function editCardContent(card, newTitle, newImageURL) {
//     card.style.display = "block";

//     const cardHeader = card.querySelector("h2");
//     cardHeader.textContent = newTitle;

//     const cardImage = card.querySelector("img");
//     cardImage.src = newImageURL;
//     cardImage.alt = newTitle + " Poster";

//     // You can use console.log to help you debug!
//     // View the output by right clicking on your website,
//     // select "Inspect", then click on the "Console" tab
//     console.log("new card:", newTitle, "- html: ", card);
// }

// // This calls the addCards() function when the page is first loaded
// document.addEventListener("DOMContentLoaded", showCards);

// function quoteAlert() {
//     console.log("Button Clicked!")
//     alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
// }

// function removeLastCard() {
//     titles.pop(); // Remove last item in titles array
//     showCards(); // Call showCards again to refresh
// }
