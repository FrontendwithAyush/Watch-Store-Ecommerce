const divs = document.querySelectorAll(".product-box");

divs.forEach((div) => {
  div.addEventListener("click", () => {
    // Capture div details
    const imgSrc = div.querySelector("img").src;
    const paraText = div.querySelector("p").innerText;
    const span = div.querySelector("span").innerText;

    // Save the data to localStorage
    const clickedDivData = {
      image: imgSrc,
      paragraph: paraText,
      span: span,
    };
    localStorage.setItem("clickedDiv", JSON.stringify(clickedDivData));

    // Redirect to the next page
    window.location.href = "check-out.html";
  });
});
// swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
// swiper end
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

// loader start
window.addEventListener(
  "load",
  setTimeout(function () {
    const loader = document.getElementById("loader");
    loader.style.display = "none"; // Hide the loader
    document.body.classList.remove("hidden-loader"); // Show the website content
  }, 1000)
);
// loader end
// opening checkout page
