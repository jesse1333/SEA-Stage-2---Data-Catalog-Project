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

// Database
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
      "The 88-key Nord Stage 4 has landed. Creativity and otherworldly sounds are a patch away with this easy-to-use keyboard. Featuring an intuitive panel design, premium 88-key fully weighted triple-sensor keybed and complete effect sections for each Layer, this versatile instrument comes fully equipped for the home, studio and stage.",
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
      "The biggest of the Yamaha MODX+ series with its 88 keys, the MODX8+ synthesizer struts a staggering amount of power and sonic versatility. Ideal for music production and sound design alike, its eight-operator, fully programmable FM-X engine delivers an array of sounds as vast as your imagination. The Yamaha MODX8+ features a semi-weighted, synth-action keyboard that is purpose-designed to stimulate creativity and emotive performance. Much of its muscle comes from the same technology that powers the top-of-the-line Yamaha MONTAGE synth line, blending the ingenious AMW2 (Advanced Wave Memory 2) engine with the sublime synthesis of FM-X (Frequency Modulation) for a limitless cosmos of creative possibilities—with double the polyphony of the original MODX8.",
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

let capos = [
  {
    name: "Kyser Quick-Change Capo",
    rating: 4.9,
    brand: "Kyser",
    cost: 24.95,
    description:
      "The Kyser Quick-Change Capo is an innovative capo that allows guitarists to swiftly switch between keys without re-tuning. Featuring a trigger-release mechanism, the Kyser Quick-Change Capo can be attached and removed from the fretboard in a matter of seconds. Its dual-action clamping system ensures even pressure across all six strings for buzz-free play. Constructed from aircraft-grade aluminum, the Kyser Quick-Change Capo is built to last through years of heavy use on stage or in the studio. The Kyser Quick-Change Capo is ideal for guitarists seeking a high-quality capo for rapid key changes and tuning adjustments.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/361600000006000-00-600x600.jpg",
    type: "capo",
  },

  {
    name: "Ernie Ball Axis Capo Black",
    rating: 4.5,
    brand: "Ernie",
    cost: 14.99,
    description:
      "The Ernie Ball Axis Capo allows you to quickly and accurately change keys with a single hand. Featuring an innovative dual-radius design, this capo conforms perfectly to either flat or curved fretboards, ensuring buzz-free performance across all six or seven strings of both electric and acoustic guitars. The Axis Capo provides optimal clamping pressure and crisp, on-pitch tone all the way up the neck, wherever your inspiration may lead.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L56933000001000-00-600x600.jpg",
    type: "capo",
  },

  {
    name: "Dunlop Trigger Curved Guitar Capo Black",
    rating: 4.1,
    brand: "Dunlop",
    cost: 17.99,
    description:
      "Dunlop's Trigger Curved Capo allows you to swiftly shift between keys without sacrificing tone or tuning. This innovative capo is constructed from aircraft-grade aluminum and padded to protect fretboards, embracing instruments with a firm yet gentle grip. The trigger mechanism provides a quick-release action, allowing players to make key changes on the fly.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/361506000001000-00-600x600.jpg",
    type: "capo",
  },

  {
    name: "D Addario NS Reflex Capo Black",
    rating: 4.3,
    brand: "Dunlop",
    cost: 19.99,
    description:
      "The D'Addario NS Reflex Capo is an innovative capo designed for buzz-free, in-tune playing at every fret. The NS Reflex Capo's patent-pending Side-Action geometry distributes pressure evenly across the neck, eliminating the pulling and detuning that plagues standard capos. Combined with a micrometer tension adjustment, the Reflex Capo applies just the right amount of force for your instrument. Constructed of aircraft-grade aluminum, the capo adds a negligible 1.5 ounces to your guitar, so you'll barely notice it's there until you need to change positions. The integrated pick holder keeps your favorite plectrum close at hand. The NS reflex capo is created by legendary designer Ned Steinberger.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/J48291000001000-00-600x600.jpg",
    type: "capo",
  },

  {
    name: "G7th Performance 3 ART Capo Black",
    rating: 4.6,
    brand: "G7th",
    cost: 69.99,
    description:
      "The Performance 3 ART Capo from G7th is an innovative capo designed to eliminate the tuning and fretting issues that plague standard capos. Featuring patented Adaptive Radius Technology, the string pad mechanism dynamically adjusts to match the fingerboard radius of any guitar, applying even pressure across all strings for unparalleled tuning stability. The Performance 3 also has G7th's Unique Tension Control system which provides intuitive adjustment of string pressure with a simple squeeze. Whether using an acoustic, electric or hybrid guitar, guitarists can have confidence that the Performance 3 will keep their instrument in tune.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L48142000001000-00-600x600.jpg",
    type: "capo",
  },
];

let amplifiers = [
  {
    name: "Line 6 Powercab 112 Plus 250W",
    rating: 4.5,
    brand: "Powercab",
    cost: 849.99,
    description:
      "The Powercab 112 Plus active speaker system was purpose-built for guitar players who want to use amp modeling technology. Developed by Line 6, pioneers of modeling amps and effects, the Powercab 112 Plus does for guitar speakers what their Helix series did for guitar processors. The Powercab 112 Plus is the only speaker system that provides both a neutral, full-range response as well as proprietary speaker modeling technology for a dynamic, amp-in-the-room experience.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L18389000001000-00-600x600.jpg",
    type: "amplifier",
  },

  {
    name: "Gibson Falcon 20 1x12",
    rating: 4,
    brand: "Gibson",
    cost: 1799,
    description:
      "The Gibson Falcon 20 1x12 tube combo pays homage to the famed Skylark amps of the ’50s and ’60s—the iconic guitar company’s entry to becoming one of the world’s first manufacturers of amplifiers. Inspired by its legendary past, the Gibson Falcon incorporates a brand-new schematic by trailblazing designer Randall Smith and the formidable MESA/Boogie design team, bringing inimitable, handcrafted vintage tone to the 21st century. This powerfully simple amp best suits tone connoisseurs seeking the nuanced dynamic response of old-school classics, starting with lean cleans that overdrive into meaty rhythms and leads with ease. The ultraboutique Gibson Falcon 20 combo offers unparalleled retro magic in a thoroughly contemporary reimagining of a certified classic.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/M03971000001000-00-600x600.jpg",
    type: "amplifier",
  },

  {
    name: "Circa 74 AV150-10",
    rating: 2.1,
    brand: "Circa",
    cost: 1199,
    description:
      'The Taylor Circa 74 AV150-10 lets you amplify both your acoustic guitar and vocals with ease. Designed by Taylor Guitars, this innovative amp combines two independent channels—one with XLR and 1/4" inputs for mics and guitars, the other a 1/4" input for guitars. Each channel has its own level, volume and 3-band EQ controls so you can mix your guitar and vocals smoothly. The Circa 74\'s solid mahogany cabinet and 10" speaker contribute to a warm, smooth tone that enhances the natural resonance of acoustic guitars. With 150W of power, it easily fills small venues with rich, detailed sound. The intuitive EQ shapes your tone, while built-in reverb adds ambience. Bluetooth connectivity lets you play along to songs. The furniture-quality mahogany amp stand angles the amp for optimal projection.',
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/M08872000001000-00-600x600.jpg",
    type: "amplifier",
  },

  {
    name: "Fender Vintage Reissue 65",
    rating: 4.9,
    brand: "Fender",
    cost: 1699.99,
    description:
      "The Fender '65 Deluxe Reverb combo amp delivers the coveted sound of a mid-1960s Fender amp in a portable package. This 22W all-tube amp features two channels—normal and vibrato—with classic tube-driven spring reverb and tube vibrato to provide shimmering pitch-modulation effects. Its 12\" Jensen C-12K speaker pumps out the full, snappy tones that shaped the sound of rock, blues and country.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/480507000001000-00-600x600.jpg",
    type: "amplifier",
  },

  {
    name: "Fender Tone Master Twin Reverb 200W",
    rating: 4.5,
    brand: "Fender",
    cost: 1249.99,
    description:
      "The Fender Tone Master Twin Reverb 200W 2x12 guitar combo amp brings Fender's legendary Twin Reverb tone into the digital age. Using advanced modeling technology, this innovative amp authentically captures the sound and feel of Fender's iconic 85W tube Twin Reverb amp in a lightweight, convenient package.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L63371000001000-00-600x600.jpg",
    type: "amplifier",
  },
];

let microphones = [
  {
    name: "Neumann U 87 Ai Shockmount Set Z Microphone With Box",
    rating: 4.9,
    brand: "Neumann",
    cost: 3750,
    description:
      "The U 87 Ai shockmount set Z microphone with box is the latest incarnation of an audio icon. First introduced in 1967, the U 87 microphone gained instant acclaim for its pristine sonic quality, versatility, and roadworthiness—and it has since become standard equipment in professional recording studios worldwide. The U 87 Ai is a microphone that combines vintage character with modern performance.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/271404000000000-00-600x600.jpg",
    type: "microphone",
  },

  {
    name: "AKG C414 XLII Reference Multi-Pattern",
    rating: 4.5,
    brand: "AKG",
    cost: 1319,
    description:
      "The AKG C414 XLII is a multi-pattern condenser microphone renowned for its pristine audio quality and versatility. The successor to AKG's legendary C414 B-TL II, the C414 XLII provides nine polar patterns to choose from for unparalleled control. Its impressive 134dB dynamic range captures even the subtlest nuances. Three bass cut filters and four pre-attenuation levels allow for fine-tuning in any situation. A peak hold LED alerts users to overload peaks in an instant. Whether tracking vocals, miking an orchestra or amplifying a kick drum, the C414 XLII delivers professional results for live sound and recording applications alike.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/485813000000000-00-600x600.jpg",
    type: "microphone",
  },

  {
    name: "Neumann TLM 103 Condenser Microphone Nickel",
    rating: 4,
    brand: "Neumann",
    cost: 1195,
    description:
      "The Neumann TLM 103 large-diaphragm condenser microphone provides studio-quality sound for any recording application. Featuring a capsule derived from the legendary Neumann U87, the TLM 103 captures vocals and instruments with stunning accuracy and depth. Its cardioid polar pattern reduces unwanted noise and feedback, making it ideal for live performances and production environments. With an advanced transformerless circuitry for ultralow self-noise, the TLM 103 handles high sound pressure levels up to 138dB without distortion. The TLM 103 delivers the Neumann standard of excellence at an affordable price.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/J52341000002000-00-600x600.jpg",
    type: "microphone",
  },

  {
    name: "Shure SM7dB Dynamic Vocal Microphone",
    rating: 4.5,
    brand: "Shure",
    cost: 499,
    description:
      "Built on one of the most instantly recognizable dynamic mics of all time, the SM7, the Shure SM7dB is geared toward podcasters, streamers and vocalists of all experience levels. The SM7dB delivers the celebrated sound signature of the SM7, heard on iconic studio recordings from Bob Dylan and Michael Jackson to Sheryl Crow, Green Day and Metallica. In fact, it is the same microphone as the latest version of the SM7 line, the SM7B—it uses the same cartridge, shockmount and inner workings—except that it bypasses the need for an external preamp with its built-in preamplifier. This clever engineering allows podcasters, and other content creators and musicians alike, the flexibility of a streamlined, travel-friendly setup, with the option to use an inline preamp if and when desired.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/M05603000000000-00-600x600.jpg",
    type: "microphone",
  },

  {
    name: "Sony C800G PAC Microphone System",
    rating: 3.8,
    brand: "Sony",
    cost: 10699.99,
    description:
      "The Sony C-800G microphone is regarded as one of the finest microphones in the world. Excellent for vocal recording in studios and film post-production houses, Sony's C-800G Studio Tube Condenser Microphone is designed for the highest possible sound reproduction quality.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L80306000000000-00-600x600.jpg",
    type: "microphone",
  },
];

let pedals = [
  {
    name: "Proline Universal Piano-Style Sustain Pedal",
    rating: 3.9,
    brand: "Proline",
    cost: 29.99,
    description:
      "The Proline PSS20 universal piano-style sustain pedal is housed in a wide chassis with rubber skid on the bottom to prevent your pedal from tipping or sliding during performances. Its switchable polarity makes it compatible with nearly all synths or pianos—Yamaha, Roland, Korg, Williams and much more. And the PSS20’s durable internal mechanism offers silent operation and years of reliable use on stage and in the studio. Includes a top-quality six-foot cable with 1/4\" plug.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L88693000000000-00-600x600.jpg",
    type: "pedals",
  },

  {
    name: "Yamaha LP-1 3-Pedal Unit",
    rating: 4.5,
    brand: "Yamaha",
    cost: 99.99,
    description:
      "Yamaha's LP-1 3 Pedal Unit brings true piano pedaling to your Yamaha P-121, P-125 or P-515 digital piano. The LP-1 attaches to your Yamaha L-121, L-125, L-300 or L-515 stand (sold separately) and provides sustain, sostenuto and soft pedals with half-damper functionality, as found on grand pianos.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/L83318000002000-00-600x600.jpg",
    type: "pedals",
  },

  {
    name: "Nektar NP-2 Universal Metal Footswitch Pedal",
    rating: 4.3,
    brand: "Nektar",
    cost: 24.99,
    description:
      "The Nektar NP-2 universal footswitch pedal is ideal for studio or stage. A rugged rubber grip keeps it in place during performances and polarity switching ensures it will work with any keyboard or electronic product requiring a footswitch.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/J41573000000000-00-600x600.jpg",
    type: "pedals",
  },

  {
    name: "Yamaha FC4A Piano-Style Sustain Foot Pedal",
    rating: 4.0,
    brand: "Yamaha",
    cost: 28.95,
    description:
      "The Yamaha FC4A Piano Style Sustain Foot Pedal lets keyboard players add nuance and emotion to their performance. Yamaha designed this pedal to provide the same sustain function as an acoustic piano, with a feel and action that experienced players expect. The anti-slip base keeps the FC4A securely in place during use. A 6' cable and 1⁄4\" connector ensure compatibility with most keyboards, synthesizers and digital pianos. For over a century, Yamaha has crafted innovative musical instruments and the FC4A sustain pedal upholds that tradition of excellence. Explore your creative potential with a sustain pedal built for piano players.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/J19485000000000-00-600x600.jpg",
    type: "pedals",
  },

  {
    name: "Yamaha FC7 Volume Pedal",
    rating: 3.9,
    brand: "Yamaha",
    cost: 37.95,
    description:
      "Yamaha's FC7 Volume Pedal gives guitarists and other instrumentalists an innovative way to shape their tone during live performances or studio recordings. The FC7 is a heavy-duty foot controller with a fortissimo function allowing performers to accent specific parts of a song for dramatic effect. Its fully adjustable pedal angle, spring point and metal connecting plate for linking multiple pedals provide customized control for any playing style. Compatible with Yamaha's DG series amplifiers, the FC7 Volume Pedal puts precision volume management at your feet.",
    image:
      "https://media.guitarcenter.com/is/image/MMGS7/151552000000000-00-600x600.jpg",
    type: "pedals",
  }
]

// Scrolls to cart upon pressing cart icon
function scrollToTop() {
  window.scrollTo({
    top: 210,
    behavior: "smooth"
});
}

// Checks which location cart is at
function checkLocation() {
  if (window.location.href.includes("item-list.html")) {
    return allItems;
  }
  else if (window.location.href.includes("acoustic-guitar-list.html")) {
    return acousticGuitars;
  }
  else if (window.location.href.includes("amplifiers-list.html")) {
    return amplifiers;
  }
  else if (window.location.href.includes("capo-list.html")) {
    return capos;
  }
  else if (window.location.href.includes("electric-guitar-list.html")) {
    return electricGuitars;
  }
  else if (window.location.href.includes("keyboard-list.html")) {
    return keyboards;
  }
  else if (window.location.href.includes("microphone-list.html")) {
    return microphones;
  }
  else if (window.location.href.includes("pedals-list.html")) {
    return pedals;
  }
  else if (window.location.href.includes("piano-list.html")) {
    return pianos;
  }
}

// Adds item to cart
function addToCart(itemName) {
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].name === itemName) {
      return;
    }
  }

  const itemArray = checkLocation();
  cartItems.push(findItem(itemName));
  cartBoolean[itemArray.indexOf(findItem(itemName))] = true;
  updateFeed(itemArray);
  updateCartFeed(cartItems);
}

// Removes item from cart
function removeFromCart(itemName) {
  const itemArray = checkLocation();

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].name === itemName) {
      cartItems.splice(i, 1);
      cartBoolean[itemArray.indexOf(findItem(itemName))] = false;
      updateFeed(itemArray);
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
      console.log("item is in cart");
      return true;
    } else {
      console.log("item is not in cart");
      return false;
    }
  }
}

// Updates the feed with the items in the whichever array is supplied in the parameter
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
    } else {
      cartText = "Add to Cart";
      cartFunction = "addToCart";
      cartImage = "add-to-cart.svg";
    }

    cardContainer.innerHTML +=
      '<div class="item-card"><img src="' +
      item.image +
      '" class="item-image"><div class="item-info"><h1 class="item-name">' +
      '<a href="#" onclick="showItem(\'' + item.name + '\')">' + item.name + '</a>' +
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
  const cardContainer = document.getElementById("cart-results-container");
  cardContainer.innerHTML = "";
  console.log(cartItems);

  if (itemArray.length === 0) {
    cardContainer.innerHTML =
      '<div class="item-card" style="height: 50px"><h1 style="font-size: 20px; margin-bottom: 0; padding-top: -3%; padding-left: 3%; width:100%; font-family: \'Roboto Medium\';">Your Cart is Empty...</h1></div>';
  } else {
    for (let i = 0; i < itemArray.length; i++) {
      let item = itemArray[i];
      cardContainer.innerHTML +=
        '<div class="item-card"><img src="' +
        item.image +
        '" class="item-image"><div class="item-info"><h1 class="item-name">' +
        item.name +
        '</h1><h1 class="item-rating">' +
        item.rating.toFixed(1) +
        ' out of 5.0</h1><h3 class="item-adjust-cart-text"> ' +
        '</div><h1 class="item-cost">' +
        "$" +
        item.cost.toLocaleString("en-US", {
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

  for (let i = 0; i < capos.length; i++) {
    allItems.push(capos[i]);
  }

  for (let i = 0; i < amplifiers.length; i++) {
    allItems.push(amplifiers[i]);
  }

  for (let i = 0; i < microphones.length; i++) {
    allItems.push(microphones[i]);
  }

  for (let i = 0; i < pedals.length; i++) {
    allItems.push(pedals[i]);
  }
}

// Sorts items by rating
function sortItemsByRating(itemArray) {
  itemArray.sort((a, b) => {
    return b.rating - a.rating;
  });
}

// Sorts all items by alphabetical order
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

// Sorts all items by price
function sortItemsByPrice(itemArray) {
  itemArray.sort((a, b) => {
    return b.cost - a.cost;
  });
}

// Shows item
function showItem(itemName) {
  let item = findItem(itemName);

  // // Clears Cart Text
  const cartTextContainer = document.getElementById("cart-text");
  console.log(cartTextContainer);
  cartTextContainer.innerHTML = '';
  const cartContainer = document.getElementById("cart-results-container");
  cartContainer.innerHTML = '';

  // Sets the header text to Items
  const titleContainer = document.getElementById("main-page-title-text");
  titleContainer.innerHTML = 'Item';

  // Sets the information display page
  const cardContainer = document.getElementById("results-container");
  cardContainer.innerHTML = 
  '<div class="item-view">' +
  '<img src="' + item.image + '" class="item-image">' +
  '<div class="item-info">' +
  '<div class="item-view-content">' +
  '<h1 class="item-name">' + item.name + '</h1>' +
  '<div class="item-description-group">' +
  '<h1 class="item-rating">Rating: ' + item.rating + ' out of 5</h1>' +
  '<h1 class="item-rating">Brand: ' + item.brand + '</h1>' +
  '<h1 class="item-rating">Price: ' + "$" +
  item.cost.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + '</h1>' +
  '</div>' +
  '</div>' +
  '<h2 class="item-view-description">' + item.description + '</h2>' +
  '</div>' +
  '</div>';
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
  document.getElementById("search-bar").value = "";

  for (let i = 0; i < allItems; i++) {
    console.log(typeof allItems[i] + "\n");
  }

  let results1 = allItems.filter(
    (allItems) => similarity(allItems.name.toLowerCase(), searchTerm) > 0.6
  );
  let results2 = allItems.filter(
    (allItems) => similarity(allItems.brand.toLowerCase(), searchTerm) > 0.6
  );
  let results3 = allItems.filter(
    (allItems) => similarity(allItems.type.toLowerCase(), searchTerm) > 0.6
  );

  let mergedResults = results1.concat(results2);
  mergedResults = mergedResults.concat(results3);
  updateFeed(mergedResults);
}

// Similarity Checker Function
function similarity(s1, s2) {
  const longer = s1.length > s2.length ? s1 : s2;
  const shorter = s1.length > s2.length ? s2 : s1;
  const longerLength = longer.length;
  if (longerLength === 0) {
    return 1.0;
  }
  return (
    (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)
  );
}

// Similarity Checker Helper Function
function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  let costs = new Array();
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) costs[j] = j;
      else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) !== s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}