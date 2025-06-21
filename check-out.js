// data from other pages
const clickedDivData = JSON.parse(localStorage.getItem("clickedDiv"));

if (clickedDivData) {
  // Use the data to display content dynamically
  document.querySelector(
    ".checkout-image"
  ).innerHTML = ` <img src="${clickedDivData.image}" alt="Div Image">`;
  document.querySelector(
    "#watch-name"
  ).innerText = ` ${clickedDivData.paragraph}`;
  document.querySelector("#span1").innerText = `${clickedDivData.span}`;
  document.getElementById("hiddenWatchName").value = clickedDivData.paragraph;
  document.getElementById("hiddenWatchPrice").value = clickedDivData.span;
}

//form handing
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("customModal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Handle form submit

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_hlnetcm", "template_z4nkenk", this, "ls4sA_uJGAniN4eAJ")
    .then(
      function () {
        // Hide the form
        document.getElementById("customModal").style.display = "none";
        // Show success message
        document.getElementById("successMessage").style.display = "flex";

        // Redirect to home after 3 seconds
        setTimeout(() => {
          window.location.href = "index.html"; // Change this to your homepage
        }, 4000);
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Failed to send order. Please try again.");
      }
    );
});

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
