function setTheme() {
  const root = document.documentElement;
  console.log(root.className);
  const newTheme = root.className === "dark" ? "light" : "dark";
  root.className = newTheme;

  document.querySelector(".theme-name").textContent = newTheme;
}

document.querySelector(".theme-toggle").addEventListener("click", setTheme);
