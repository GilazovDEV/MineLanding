window.addEventListener("scroll", function () {
  const hiddenElement = document.getElementById("hiddenElement");
  if (window.scrollY > 40) {
    hiddenElement.classList.add("hidden-background");
  } else {
    hiddenElement.classList.remove("hidden-background");
  }
});
