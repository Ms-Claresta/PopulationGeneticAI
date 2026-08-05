document.addEventListener("DOMContentLoaded", () => {
  const progressFill = document.getElementById("progressFill");
  const progressText = document.getElementById("progressText");

  // Load progress from localStorage
  let progress = localStorage.getItem("progress") || 0;
  progressFill.style.width = progress + "%";
  progressText.textContent = progress + "% Completed";

  // Dark mode toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
  });

  // Apply saved dark mode
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
});
