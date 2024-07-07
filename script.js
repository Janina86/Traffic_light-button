let clickCounter = 0;
const button = document.getElementById("colorButton");
const colors = ["btn-danger", "btn-warning", "btn-success"];

function changeColor() {
  for (let i = 0; i < colors.length; i++) {
    button.classList.remove(colors[i]);
  }

  button.classList.add(colors[clickCounter]);

  clickCounter = (clickCounter + 1) % colors.length;
}
