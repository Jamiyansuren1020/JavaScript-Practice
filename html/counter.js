const screen = document.getElementById("number");
const inc = document.getElementById("increase");
const dec = document.getElementById("decrease");
inc.addEventListener("click", () => {
  const newNumber = parseInt(screen.innerHTML) + 1;
  screen.innerHTML = newNumber;
});
dec.addEventListener("click", () => {
  screen.innerHTML = parseInt(screen.innerHTML) - 1;
});
