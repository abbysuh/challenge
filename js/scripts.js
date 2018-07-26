const button = document.querySelector("button");

button.addEventListener("mouseenter", (e) => {
  button.classList.toggle("grow-button");
});

button.addEventListener("mouseleave", (e) => {
  button.classList.remove("grow-button");
  button.classList.toggle("shrink-button");
});
