// Data arrays for Buds, Flavors, Bunks
const budsData = [
  {
    name: "GH Gold",
    image: "img/gh-gold-str.jpg",
    price: "₦ 900K / p, ₦ 100K / oz",
    inStock: true
  },
  {
    name: "US Yankees",
    image: "img/us-yankees-str.jpg",
    price: "₦ 4.3M / p, ₦ 280K / oz",
    inStock: true
  },
  {
    name: "Canadian Berry Blast",
    image: "img/canadian-berry-blast.png",
    price: "₦ 3.3M / p, ₦ 212K / oz",
    inStock: true
  },
  {
    name: "SA Cheese Bomb",
    image: "img/sa-mandela-bomb.jpg",
    price: "₦ 3.5M / p, ₦ 224K / oz",
    inStock: true
  },
  {
    name: "Scotish Zkittles",
    image: "img/scotish-zkittles.png",
    price: "₦ 900K / p, ₦ 100K / oz",
    inStock: true
  },
  {
    name: "Swazi Burns",
    image: "img/swazi-burns.jpg",
    price: "₦ 1.9M / p, ₦ 156K / oz",
    inStock: true
  }
];

const flavorsData = [
  {
    name: "Distillate (CBD Oil)",
    image: "img/cbd-oil.webp",
    price: "₦ 134K",
    inStock: true
  },
  {
    name: "Brownies",
    image: "img/brownies.jpg",
    price: "₦ 24K",
    inStock: true
  },
  {
    name: "Stoner Spread (Budder)",
    image: "img/budder.jpg",
    price: "₦ 62K",
    inStock: true
  },
  {
    name: "Bubble Hash",
    image: "img/bubble-hash.jpg",
    price: "₦ 34K",
    inStock: true
  },
  {
    name: "Rosin",
    image: "img/rosin.jpg",
    price: "₦ 53K",
    inStock: true
  },
  {
    name: "Crumble",
    image: "img/crumble.jpg",
    price: "₦ 38K",
    inStock: true
  }
];

const bunksData = [
  {
    name: "Rolling Papers (Pack)",
    image: "img/rolling-papers.webp",
    price: "₦ 1.2K",
    inStock: true
  },
  {
    name: "Crushers",
    image: "img/crusher.jpg",
    price: "₦ 15K",
    inStock: true
  },
  {
    name: "Lighters",
    image: "img/lighter.jpg",
    price: "₦ 1K",
    inStock: true
  },
  {
    name: "Pipes",
    image: "img/pipe.jpg",
    price: "₦ 10K",
    inStock: true
  },
  {
    name: "Shisha Pots",
    image: "img/shisha.jpg",
    price: "₦ 67K",
    inStock: true
  },
  {
    name: "Dab Rigs",
    image: "img/dab-rig.webp",
    price: "₦ 75k",
    inStock: true
  },
  {
    name: "Vaporizers",
    image: "img/vaporizer.webp",
    price: "₦ 35K",
    inStock: true
  },
  {
    name: "Backwood",
    image: "img/backwood-smokes.png",
    price: "₦ 8K",
    inStock: true
  }
];

// Utility function to create a card
function createCardItem(item) {
  // Create elements
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = item.image;
  img.alt = item.name;

  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');

  const title = document.createElement('h3');
  title.textContent = item.name;

  const price = document.createElement('p');
  price.classList.add('price');
  price.textContent = item.price;

  const stockStatus = document.createElement('span');
  stockStatus.classList.add('stock-status');
  if(item.inStock) {
    stockStatus.classList.add('stock-in');
    stockStatus.textContent = "In Stock";
  } else {
    stockStatus.classList.add('stock-out');
    stockStatus.textContent = "Out of Stock";
  }

  // Assemble
  cardContent.appendChild(title);
  cardContent.appendChild(price);
  cardContent.appendChild(stockStatus);
  card.appendChild(img);
  card.appendChild(cardContent);

  return card;
}

// Render the data
function renderProducts() {
  const budsContainer = document.getElementById('buds-container');
  const flavorsContainer = document.getElementById('flavors-container');
  const bunksContainer = document.getElementById('bunks-container');

  budsData.forEach(bud => {
    budsContainer.appendChild(createCardItem(bud));
  });
  flavorsData.forEach(flavor => {
    flavorsContainer.appendChild(createCardItem(flavor));
  });
  bunksData.forEach(bunk => {
    bunksContainer.appendChild(createCardItem(bunk));
  });
}

// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// On page load
window.onload = () => {
  // Populate the year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Render all products
  renderProducts();
};
