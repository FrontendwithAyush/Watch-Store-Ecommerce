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
function saveAddress() {
  const address = {
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    zip: document.getElementById("zip").value,
    country: document.getElementById("number").value,
  };
  console.log(address);
  document.querySelector("#addressForm").style.display = "none";
  document.querySelector(".after-save").style.display = "flex";
  document.querySelector("#p1").innerHTML = address.name;
  document.querySelector("#p2").innerHTML = address.country;
  document.querySelector("#p3").innerHTML = address.address;
  document.querySelector("#p4").innerHTML = address.city;
  document.querySelector("#p5").innerHTML = address.state;
  document.querySelector("#p6").innerHTML = address.zip;
  alert("Address saved locally!");
}
