import "./styles.css";
import "./about.css";
import heroImg from "./pexels-pixabay-260922.jpg";

const content = document.getElementById("content");
const card = document.createElement("div");
const img = document.createElement("img");
img.src = heroImg;
const paragraph  = document.createElement("p");
paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu";

card.classList.add("home-card");
img.classList.add("hero-img");
paragraph.classList.add("paragraph")
card.appendChild(img);
card.appendChild(paragraph);
content.appendChild(card);
