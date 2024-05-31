document.querySelectorAll(".smooth-scroll").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".toggle-button");
  const navLinks = document.querySelector(".nav-links");

  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  // Add event listeners to each menu option
  const menuOptions = document.querySelectorAll(".nav-links a");
  menuOptions.forEach((option) => {
    option.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});
