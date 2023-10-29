const headerImg = document.querySelector(".header-img");

const headerImages = [
    "images/cross-roads-2.jpg",
    // "images/trees.jpg",
    // "images/bridge.jpg",
    // "images/road.jpg",
    "images/abandoned-road.jpg",
    "images/silo.jpg",
];

const randomIndex = Math.floor(Math.random() * headerImages.length);

headerImg.src = headerImages[randomIndex];

export default headerImg;
