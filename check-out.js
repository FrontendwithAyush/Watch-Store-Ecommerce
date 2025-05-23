// data from other pages
const clickedDivData = JSON.parse(localStorage.getItem("clickedDiv"));

if (clickedDivData) {
  console.log("Received Data:", clickedDivData);
  // Use the data to display content dynamically
  document.querySelector(
    ".checkout-image"
  ).innerHTML = ` <img src="${clickedDivData.image}" alt="Div Image">`;
  document.querySelector(
    "#watch-name"
  ).innerText = ` ${clickedDivData.paragraph}`;
  document.querySelector("#span1").innerText = `${clickedDivData.span}`;
}
// slide bar open
function slide_bar_open() {
  document.querySelector(".slide").style.display = "flex";
}
function slide_bar_close() {
  document.querySelector(".slide").style.display = "none";
}
// for nav-bar trial
let lastScrollPosition = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.pageYOffset;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down
    navbar.classList.add("hidden");
  } else {
    // Scrolling up
    navbar.classList.remove("hidden");
  }

  lastScrollPosition = currentScrollPosition;
});
// for phone nav
