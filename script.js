let clickCounter = 0;
const button = document.getElementById("colorButton");
function changeColor() {
  ++clickCounter;
  if (clickCounter == 1) {
    button.classList.remove("btn-danger");
    button.classList.add("btn-warning");
  } else if (clickCounter == 2) {
    button.classList.remove("btn-warning");
    button.classList.add("btn-success");
  } else {
    button.classList.remove("btn-success");
    button.classList.add("btn-danger");
    clickCounter = 0;
  }
}
