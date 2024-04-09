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



// Arrays Declarations
let cartItems = [];
let cartBoolean = [];
let allItems = [];

// Item Class Declarations
class Item {
  constructor(name, rating, brand, cost, description, image, type) {
    this.name = name;
    this.rating = rating;
    this.brand = brand;
    this.cost = cost;
    this.description = description;
    this.image = image;
    this.type = type;
  }

  // Getters
  getName() {
    return this.name;
  }

  getRating() {
    return this.rating;
  }

  getBrand() {
    return this.brand;
  }

  getCost() {
    return this.cost;
  }

  getDescription() {
    return this.description;
  }

  getImage() {
    return this.image;
  }

  getType() {
    return this.type;
  }

  // Setters
  setName(name) {
    this.name = name;
  }

  setRating(rating) {
    this.rating = rating;
  }

  setBrand(brand) {
    this.brand = brand;
  }

  setCost(cost) {
    this.cost = cost;
  }

  setDescription(description) {
    this.description = description;
  }

  setImage(image) {
    this.image = image;
  }

  setType(type) {
    this.type = type;
  }
}

class Guitar extends Item {
  constructor(name, rating, brand, cost, description, image, type, guitarType) {
    super(name, rating, brand, cost, description, image, type);
    this.guitarType = guitarType;
  }

  // Getter
  getGuitarType() {
    return this.guitarType;
  }

  // Setter
  setGuitarType(guitarType) {
    this.guitarType = guitarType;
  }
}

class Piano extends Item {
  constructor(name, rating, brand, cost, description, image, type, pianoType) {
    super(name, rating, brand, cost, description, image, type);
    this.pianoType = pianoType;
  }

  // Getter
  getPianoType() {
    return this.pianoType;
  }

  // Setter
  setPianoType(pianoType) {
    this.pianoType = pianoType;
  }
}

class Keyboard extends Item {
  constructor(name, rating, brand, cost, description, image, type, weighted) {
    super(name, rating, brand, cost, description, image, type);
    this.weighted = weighted;
  }

  // Getter
  getWeighted() {
    return this.weighted;
  }

  // Setter
  setWeighted(weighted) {
    this.weighted = weighted;
  }
}

//Database
let acousticGuitars = [
  {
    name: "Gibson J-45 Standard Rosewood Acoustic-Electric",
    rating: 4.7,
    brand: "Gibson",
    cost: 3999.0,
    description:
      "The J-45 is Gibson's best-selling acoustic of all time. Nicknamed 'The Workhorse' and first introduced in 1942, this iconic acoustic has become the cornerstone of its round-shoulder, dreadnought line. World renowned for its full, balanced expression, warm bass, and excellent projection, the J-45 has been refined to carry this legacy to new heights.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/M09011000001000-00-600x600.jpg",
    type: "Guitar",
    guitarTypeString: "Acoustic",
  },

  {
    name: "Taylor 414ce V-Class Special-Edition",
    rating: 4.9,
    brand: "Taylor",
    cost: 3099.0,
    description:
      "The 414ce V-Class Special-Edition Grand Auditorium acoustic-electric guitar from Taylor offers musicians an ideal blend of powerful tone and accessible playing comfort. Built with a timeless combination of tonewoods—including a Sitka spruce top, and Indian rosewood back and sides—the 414ce produces iconic acoustic timbre that’s powerful, articulate and harmonically complex. Innovative V-Class bracing further optimizes the guitar's unforgettable sound, which also amplifies naturally using custom Expression System 2 electronics. The Taylor 414ce is a responsive acoustic-electric that feels, sounds and looks fantastic.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L26331000001000-00-600x600.jpg",
    type: "Guitar",
    guitarTypeString: "Acoustic",
  },

  {
    name: "Martin Special 000-X1AE Style Acoustic-Electric",
    rating: 4.5,
    brand: "Martin",
    cost: 649.0,
    description:
      "The Martin Special 000-X1AE Style acoustic-electric guitar combines over 180 years of craftsmanship with modern innovation. This balanced auditorium-sized Martin acoustic-electric features a solid Sitka spruce top with a customized rosette and durable, eco-friendly high-pressure laminate back and sides with a figured rosewood pattern. The strong mahogany neck and Richlite fingerboard deliver fast, even playability across the neck. Reliable Fishman MX electronics allow you to plug in to any amp or mixing board. is proud to offer the legendary Martin tone and feel you know and love at an accessible price in the Special 000-X1AE.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L76820000001000-00-600x600.jpg",
    type: "Guitar",
    guitarTypeString: "Acoustic",
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
    type: "Guitar",
    guitarTypeString: "Acoustic",
  },

  {
    name: "Taylor 214e DLX Grand Auditorium Acoustic-Electric Guitar",
    rating: 5.0,
    brand: "Taylor",
    cost: 1499.0,
    description:
      "The 214e Deluxe Grand Auditorium Acoustic-Electric Guitar is a professional-grade instrument incorporating innovative design and premium components for flawless plugged-in performance and rich, balanced acoustic tone. At the heart of the 214e Deluxe is a solid Sitka spruce top paired with layered rosewood back and sides, a combination that produces crisp highs, focused midrange and robust low end. Onboard ES2 electronics faithfully amplify the guitar's acoustic voice and provide flexible tone shaping for any live or studio application. With deluxe appointments like white binding, abalone inlays and a high-gloss finish, the 214e Deluxe is as stunning to look at as it is to play.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L18959000001000-00-600x600.jpg",
    type: "Guitar",
    guitarTypeString: "Acoustic",
  },
];

let electricGuitars = [
  {
    name: "Schecter Guitar Research Synyster Gates Custom-S",
    rating: 1.2,
    brand: "Schecter",
    cost: 1999.0,
    description:
      "The Schecter Synyster Gates Custom FR-S Relic electric guitar unlocks the ultimate rock ’n’ roll/metal performance experience. This signature model, designed with Avenged Sevenfold's lead axeman Synyster Gates, gives you the batwings you need for soaring solos and biting riffs. With a Schecter USA Synyster Gates signature humbucking bridge pickup, Sustainiac neck pickup and gorgeously expressive Floyd Rose 1500 series tremolo system, the strength of the world is on your shoulder.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/M11245000001000-00-600x600.jpg",
    type: "Guitar",
    guitarTypeString: "Electric",
  },

  {
    name: "PRS SE Custom 24 Limited-Edition Electric Guitar Ruby",
    rating: 5.0,
    brand: "PRS",
    cost: 849.0,
    description:
      "The PRS SE Custom 24 Limited Edition lets you experience iconic Paul Reed Smith style and tone in an affordable package. The PRS Custom 24 is a legend in its own right, boasting incredible sonic versatility that jazz cats and metalheads have each come to embrace. Built for musicians seeking performance and reliability, this SE model features the brand’s hallmark bird inlays and signature aesthetics, complete with 85/15 “S” pickups for articulate tones across genres. Striking Ruby and Blue Fade finishes are only around for a limited time, marking this a special addition to the PRS SE Custom 24 lineup.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/M09119000001000-00-600x600.jpg",
    type: "Guitar",
    guitarTypeString: "Electric",
  },

  {
    name: "Epiphone Dave Grohl DG-335 Semi-Hollow Electric Guitar",
    rating: 4.8,
    brand: "Epiphone",
    cost: 1299.0,
    description:
      "Designed in close collaboration with Gibson Custom Shop, the Epiphone Dave Grohl DG-335 blends the best features of classic semi-hollow and solidbody electric guitars. Drawing from the ES-335 and Trini Lopez models, it's crafted for Foo Fighters fans and aficionados of Dave Grohl's iconic guitar tone. The DG-335 has a comfortable, familiar feel with versatile sound-shaping controls to capture the rock legend's playing style.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/M05675000001000-00-600x600.jpg",
    type: "Guitar",
    guitarTypeString: "Electric",
  },

  {
    name: "Epiphone 1963 Firebird I Electric Guitar Silver Mist",
    rating: 4.5,
    brand: "Epiphone",
    cost: 1299.0,
    description:
      "The Epiphone 1963 Firebird I, inspired by the Gibson Custom original, lets you channel the iconic style and sound of a classic. With its eye-catching design, this sleek solidbody electric guitar authentically captures a vintage vibe made famous by legends, including blues icon Johnny Winter, Keith Richards and Brian Jones of The Rolling Stones, Eric Clapton and Phil Manzanera of Roxy Music. The Epiphone 1963 Firebird I is built for today’s player while staying true to tradition, offering timeless tone and smooth playability for those who dig its hot-rodded, future-retro trappings.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/M04077000001000-00-600x600.jpg",
    type: "Guitar",
    guitarTypeString: "Electric",
  },

  {
    name: "Fender Limited-Edition American Ultra Telecaster Electric Guitar",
    rating: 4.8,
    brand: "Fender",
    cost: 2799.99,
    description:
      "The Fender American Ultra Telecaster melds innovative design with classic Tele vibe for guitarists seeking top-tier performance. This unique Telecaster features Fender's Modern D neck profile with rolled edges for endless playing comfort. The compound 10\"–14\" radius fingerboard allows you to solo effortlessly anywhere on the neck. Dual Ultra Noiseless Vintage pickups serve up a plethora of pristine tones without hum or buzz. This limited-edition Tele showcases a stunning Tiger's Eye finish on a flame maple top and a lightweight alder body with contoured edges for hours of playing comfort. With sealed locking tuners and a premium case, this versatile Tele provides state-of-the-art function for gigs, sessions and beyond.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/M04246000001000-00-600x600.jpg",
    type: "Guitar",
    guitarTypeString: "Electric",
  },
];

let pianos = [
  {
    name: "Bosendorfer 230VC Vienna Concert Grand Piano",
    rating: 4.8,
    brand: "Bösendorfer",
    cost: 998999,
    description:
      "Offering a new dimension in sound and size, the Bösendorfer 230VC Vienna Concert Grand represents a pinnacle in the Viennese tradition of piano-making wherein the whole body, not just the soundboard, supports how sound is formed and projected. Bösendorfer craftsmen expertly add a ten-millimeter, quarter-sawn spruce inner rim that allows the whole instrument to resonate as you play.",
    image:
      "https://keyboardconcepts.com/wp-content/uploads/2020/07/Bosendorfer-Standard-Model_225.jpg",
    type: "Piano",
    pianoType: "Concert Grand",
  },

  {
    name: "Yamaha U-1",
    rating: 4.5,
    brand: "Yamaha",
    cost: 6999.99,
    description:
      "These world-standard pianos are better than ever and reflect the latest advances in materials and construction. Extra-wide music desks define these fine instruments which incorporate features adapted from Yamaha grand pianos.",
    image:
      "https://keyboardconcepts.com/wp-content/uploads/2020/07/U1-1-c6f7e2c3-e1596925195982.jpg",
    type: "Piano",
    pianoType: "Upright",
  },

  {
    name: "W. Hoffmann Professional P 206",
    rating: 4.4,
    brand: "W. Hoffmann",
    cost: 399999,
    description:
      "Nearly a concert grand! The W.Hoffmann Professional P 206 is made in Europe according to the C. Bechstein Germany guidelines and using carefully selected materials. This parlor grand piano that embodies a wealth of craftsmanship is geared to the needs of professional pianists.",
    image:
      "https://www.bechstein.com/fileadmin/user_upload/Bechstein/02_Fluegel_Klaviere/03_W_Hoffmann/Professional206/WH_P_206_Black_pol_520x550x72x80i.jpg",
    type: "Piano",
    pianoType: "Baby Grand",
  },

  {
    name: "Yamaha YUS-3",
    rating: 4.7,
    brand: "Yamaha",
    cost: 199999,
    description:
      "Perfected through Yamaha SU7 leading-edge technology, the YUS Series projects superior voicing with rich sound and delicate balance. A simple, sophisticated cabinet produces superb acoustics to the subtlest notes. This is a beautiful piano as appropriate for professionals as for home piano enthusiasts.",
    image:
      "https://www.cunninghampiano.com/cdn/shop/products/yus3_pe.jpg?v=1675968419&width=1200",
    type: "Piano",
    pianoType: "Upright",
  },

  {
    name: "Yamaha P22",
    rating: 3.9,
    brand: "Yamaha",
    cost: 8799,
    description:
      "The P22 delivers high-end quality and features at a mid-range price. Built with Yamaha’s renowned care and attention to detail, it has become the favorite upright piano for schools, studios, religious institutions, and in the home. With a rich, resonant voice, responsive touch, and excellent tone, the P22 brings out the passion for music in every player.",
    image:
      "https://keyboardconcepts.com/wp-content/uploads/2020/07/P22-SE-product-image.jpg",
    type: "Piano",
    pianoType: "Upright",
  },
];

let keyboards = [
  {
    name: "Nord Stage 4 88-Key Keyboard",
    rating: 4.8,
    brand: "Nord",
    cost: 5699,
    description:
      "The 88-key Nord Stage 4 has landed at Guitar Center. Creativity and otherworldly sounds are a patch away with this easy-to-use keyboard. Featuring an intuitive panel design, premium 88-key fully weighted triple-sensor keybed and complete effect sections for each Layer, this versatile instrument comes fully equipped for the home, studio and stage.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/M00636000000000-00-600x600.jpg",
    type: "keyboard",
    weighted: true,
  },

  {
    name: "Yamaha P-125ABLB Digital Piano",
    rating: 5,
    brand: "Yamaha",
    cost: 699.99,
    description:
      "The P-125ABLB digital piano is a sleek yet powerful digital piano combines Yamaha's acclaimed Pure CF Sound Engine and 88-key graded hammer standard keyboard to deliver the rich, nuanced tones of a concert grand piano. Designed for home use, the P-125ABLB includes a furniture-style wooden stand and bench, allowing musicians of all levels to enjoy an authentic acoustic piano experience in an affordable, space-saving package.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/M00913000000000-00-600x600.jpg",
    type: "keyboard",
    weighted: true,
  },

  {
    name: "Yamaha MODX8+ 88-Key Synthesizer",
    rating: 3.5,
    brand: "Yamaha",
    cost: 1999.99,
    description:
      "The biggest of the Yamaha MODX+ series with its 88 keys, the MODX8+ synthesizer struts a staggering amount of power and sonic versatility. Ideal for music production and sound design alike, its eight-operator, fully programmable FM-X engine delivers an array of sounds as vast as your imagination. The Yamaha MODX8+ features a semi-weighted, synth-action keyboard that is purpose-designed to stimulate creativity and emotive performance. Much of its muscle comes from the same technology that powers the top-of-the-line Yamaha MONTAGE synth line, blending the ingenious AMW2 (Advanced Wave Memory 2) engine with the sublime synthesis of FM-X (Frequency Modulation) for a limitless cosmos of creative possibilities—with double the polyphony of the original MODX8. Available at Guitar Center, this cutting-edge 5-octave MODX8+ synth keyboard is ready-made to inspire awe and make your ideas a reality.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L96788000000000-00-600x600.jpg",
    type: "keyboard",
    weighted: false,
  },

  {
    name: "Yamaha PSR-SX600 61-Key Arranger Keyboard",
    rating: 4.5,
    brand: "Yamaha",
    cost: 999.99,
    description:
      "Yamaha's PSR-SX600 is an innovative 61-key arranger keyboard provides a powerful toolset for live performance and composition. Featuring 850 instrument voices, multi-track recording functions, Smart Chord functionality, and comprehensive auto-accompaniment styles, the PSR-SX600 allows you to craft full arrangements on the fly.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L78598000000000-00-600x600.jpg",
    type: "keyboard",
    weighted: false,
  },

  {
    name: "Akai Professional MPC Key 37 Production Synthesizer",
    rating: 4.9,
    brand: "Akai",
    cost: 899,
    description:
      "The Akai Professional MPC Key 37 brings together the best of Akai's legendary MPC beat making with the expressiveness of a 37-note synth-action keyboard. This powerful production workstation gives you Akai's iconic MPC workflow for fast, intuitive music creation and sampling, plus over 10GB of sounds and instruments from Akai's industry-standard MPC plug-ins. The 37-note keybed features aftertouch and separate pitch and modulation wheels, while the 16 velocity-sensitive MPC pads give you polyphonic aftertouch for nuanced expression. With built-in effects, a color touchscreen interface and seamless connectivity to DAWs, outboard gear and Splice, the MPC Key 37 makes it easier than ever to turn your musical ideas into full productions.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/M08754000000000-00-600x600.jpg",
    type: "keyboard",
    weighted: false,
  },
];

// Adds item to cart
function addToCart(itemName) {
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].name === itemName) {
      return;
    }
  } 

  cartItems.push(findItem(itemName));
  cartBoolean[allItems.indexOf(findItem(itemName))] = true;
  updateFeed(allItems);
  updateCartFeed(cartItems);
}

// Removes item from cart
function removeFromCart(itemName) {
  console.log("Hello");
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].name === itemName) {
      cartItems.splice(i, 1);
      cartBoolean[allItems.indexOf(findItem(itemName))] = false;
      updateFeed(allItems);
      updateCartFeed(cartItems);
      return;
    }
  } 
  return;
}

// Finds the item object from the allItems array
function findItem(itemName) {
  for (let i = 0; i < allItems.length; i++) {
    if (allItems[i].name === itemName) {
      return allItems[i];
    }
  }
}

// Checks if item is in cart
function checkItemInCart(item) {
  for (let i = 0; i < cartItems.length; i++) {
    if (item.name === cartItems[i].name) {
      console.log("item is in cart")
      return true;
    }
    else {
      console.log("item is not in cart")
      return false;
    }
  }
}

// updates the feed with the items in the whichever array is supplied in the parameter
function updateFeed(itemArray) {
  const cardContainer = document.getElementById("results-container");
  cardContainer.innerHTML = "";

  for (let i = 0; i < itemArray.length; i++) {
    let item = itemArray[i];
    
    let cartText = "";
    let cartFunction = "";
    let cartImage = "";

    // if is true (in cart)
    if (cartBoolean[i]) {
      cartText = "To Remove";
      cartFunction = "removeFromCart";
      cartImage = "remove-from-cart.svg";
    }
    else {
      cartText = "Add to Cart";
      cartFunction = "addToCart";
      cartImage = "add-to-cart.svg";
    }

    cardContainer.innerHTML +=
      '<div class="item-card"><img src="' +
      item.image +
      '" class="item-image"><div class="item-info"><h1 class="item-name">' +
      item.name +
      '</h1><h1 class="item-rating">' +
      item.rating.toFixed(1) +
      ' out of 5.0</h1><h3 class="item-adjust-cart-text"> ' +
      cartText +
      ' </h3><a href="#" id="' +
      item.name +
      '" onclick="' +
      cartFunction +
      "('" +
      item.name +
      '\')" class="item-cart"><img src="assets/' +
      cartImage +
      '" alt="SVG Add to Cart"></a></div><h1 class="item-cost">' +
      "$" +
      item.cost.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) +
      "</h1></div>";
  }
}

function updateCartFeed(itemArray) {
  const cardContainer = document.getElementById("dropdown-content-cart");
  cardContainer.innerHTML = "";
  console.log(cartItems);

  if (itemArray.length === 0) {
    cardContainer.innerHTML =
    '<div class="item-card-cart"><h1 style="font-size: 20px; margin-bottom: 0; padding-top: -3%; padding-left: 3%; width:100%; font-family: \'Roboto Medium\';">Your Cart is Empty...</h1></div>'
  }

  else {
    for (let i = 0; i < itemArray.length; i++) {
      cardContainer.innerHTML =
      '<div class="item-card"><img src="' +
      item[i].image +
      '" class="item-image"><div class="item-info"><h1 class="item-name">' +
      item[i].name +
      '</h1><h1 class="item-rating">' +
      item[i].rating.toFixed(1) +
      ' out of 5.0</h1><h3 class="item-adjust-cart-text"> ' +
      '</div><h1 class="item-cost">' +
      "$" +
      item[i].cost.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }) +
      "</h1></div>";
    }
  }
}

function initializeFeedCart() {
  // Let true = in cart, false = not in cart
  for (let i = 0; i < allItems.length; i++) {
    cartBoolean.push(false);
  }
}

// Adds all data to allItems array
function appendAllInstruments() {
  for (let i = 0; i < acousticGuitars.length; i++) {
    allItems.push(acousticGuitars[i]);
  }

  for (let i = 0; i < electricGuitars.length; i++) {
    allItems.push(electricGuitars[i]);
  }

  for (let i = 0; i < pianos.length; i++) {
    allItems.push(pianos[i]);
  }

  for (let i = 0; i < keyboards.length; i++) {
    allItems.push(keyboards[i]);
  }
}

//Sorts items by rating
function sortItemsByRating(itemArray) {
  itemArray.sort((a, b) => {
    return b.rating - a.rating;
  });
}

//Sorts all items by alphabetical order
function sortItemsAlphabetically(itemArray) {
  itemArray.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
}

//Sorts all items by price
function sortItemsByPrice(itemArray) {
  itemArray.sort((a, b) => {
    return b.cost - a.cost;
  });
}

// On Page Load
document.addEventListener("DOMContentLoaded", function () {
  appendAllInstruments(); // Populates allItems array
  sortItemsByRating(allItems); // Sorts allItems by rating
  updateFeed(allItems); // Updates the feed with items from allItems
  updateCartFeed(cartItems); // Updates the cart feed with items from cartItems
});

// Event listener for dropdown button for sorting
document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.querySelector(".dropbtn-sort");
  const dropdownContent = document.querySelector(".dropdown-content-sort");

  // Toggle dropdown content when dropdown button is clicked
  dropdownButton.addEventListener("click", function () {
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  // Close dropdown when clicking outside of it
  document.body.addEventListener("click", function (event) {
    if (
      !event.target.matches(".dropbtn-sort") &&
      !event.target.matches(".dropdown-content-sort")
    ) {
      dropdownContent.style.display = "none";
    }
  });
});


// Gets input from search bar
function getInput() {
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();
  document.getElementById('search-bar').value = '';


  for (let i = 0; i < allItems; i++) {
    console.log(typeof allItems[i] + "\n");
  }



  let results1 = allItems.filter(allItems => similarity(allItems.name.toLowerCase(), searchTerm) > 0.6);
  let results2 = allItems.filter(allItems => similarity(allItems.brand.toLowerCase(), searchTerm) > 0.6);
  let results3 = allItems.filter(allItems => similarity(allItems.type.toLowerCase(), searchTerm) > 0.6);

  let mergedResults = results1.concat(results2);
  mergedResults = mergedResults.concat(results3);
  updateFeed(mergedResults);
}

//Similarity Checker Function
function similarity(s1, s2) {
  const longer = s1.length > s2.length ? s1 : s2;
  const shorter = s1.length > s2.length ? s2 : s1;
  const longerLength = longer.length;
  if (longerLength === 0) {
      return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

//Similarity Checker Helper Function
function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  let costs = new Array();
  for (let i = 0; i <= s1.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= s2.length; j++) {
          if (i === 0)
              costs[j] = j;
          else {
              if (j > 0) {
                  let newValue = costs[j - 1];
                  if (s1.charAt(i - 1) !== s2.charAt(j - 1))
                      newValue = Math.min(Math.min(newValue, lastValue),
                          costs[j]) + 1;
                  costs[j - 1] = lastValue;
                  lastValue = newValue;
              }
          }
      }
      if (i > 0)
          costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}




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
