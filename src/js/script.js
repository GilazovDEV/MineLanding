window.addEventListener("scroll", function () {
  const hiddenElement = document.getElementById("hiddenElement");
  if (window.scrollY >= 400) {
    hiddenElement.classList.add("bg-l1ght");
  } else {
    hiddenElement.classList.remove("bg-l1ght");
  }
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.3] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
  observer.observe(elm);
}

document.getElementById("confetti-button").addEventListener("click", function() {
confetti();
});