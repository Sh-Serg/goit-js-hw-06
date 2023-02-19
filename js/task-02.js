const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const ingredientItems = ingredients.map((ingredient) => {
  const ingredientItemEl = document.createElement("li");
  ingredientItemEl.classList.add("item");
  ingredientItemEl.textContent = ingredient;
  return ingredientItemEl;
});

ingredientsEl.append(...ingredientItems);
