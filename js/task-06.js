const myInput = document.querySelector("#validation-input");

myInput.addEventListener("blur", onBlur);

function onBlur(e) {
  const input = e.currentTarget;
  // const inputLength = Number(input.dataset.length);

  if (input.value.length === Number(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
  // console.log(input);
  // console.log(inputLength);
  // console.log(input.value.length);
}
