window.addEventListener("scroll", function () {
  const hiddenElement = document.getElementById("hiddenElement");
  if (window.scrollY >= 400) {
    hiddenElement.classList.add("bg-l1ght");
  } else {
    hiddenElement.classList.remove("bg-l1ght");
  }
});
