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
