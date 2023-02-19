function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const input = controls.querySelector("input");

let size = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    size += 10;
    newBox.style.background = getRandomHexColor();
    document.querySelector("#boxes").appendChild(newBox);
  }
}

function destroyBoxes() {
  const boxes = document.querySelector("#boxes");
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

createButton.addEventListener("click", () => {
  createBoxes(input.value);
  input.value = "";
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
  size = 30;
});
