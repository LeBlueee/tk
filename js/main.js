// Toggle button to dark mode
document.querySelector(".theme-toggle-button").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Icon changed
let themeToggleButton = document.querySelector('.theme-toggle-button');

themeToggleButton.addEventListener('click', function() {
  let sunMoonContainer = this.querySelector('.sun-moon-container');
  sunMoonContainer.classList.toggle('moon-visible');
});
