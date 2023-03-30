const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

ingredients.forEach((item) => {
  const newItemEl = document.createElement("li");
  newItemEl.textContent = item;
  listEl.append(newItemEl);
});
