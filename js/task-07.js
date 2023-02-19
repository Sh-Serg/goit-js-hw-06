const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", fontSize);
function fontSize(e) {
  text.style.fontSize = `${e.currentTarget.value}px`;
  // console.log(e.currentTarget.value);
}
