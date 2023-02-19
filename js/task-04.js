let counterValue = 0;

const myValue = document.querySelector("#value");
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

buttonDecrement.addEventListener("click", setCounterDecrement);
buttonIncrement.addEventListener("click", setCounterIncrement);

function setCounterDecrement() {
  counterValue -= 1;
  myValue.textContent = counterValue;
  // myValue.textContent -= 1;
}

function setCounterIncrement() {
  counterValue += 1;
  myValue.textContent = counterValue;
  // myValue.textContent += 1;
}
