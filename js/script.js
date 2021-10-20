const button = document.querySelector(".show-results");
const results = document.querySelector(".results");
const expensesList = document.querySelector(".expenses");

const expenses = [
  9.99,
  25.8,
  144.39,
  12.98,
  4.99,
  38.75,
  144.5,
  99.99,
  75.4,
  3.75,
  62.88
];

// Display your expenses in a list
for (let exp of expenses) {
  let li = document.createElement("li");
  li.innerText = `$ ${exp}`;
  expensesList.append(li);
}

// Write showMinMax function here
const showMinMax = function (expenses) {
  const min = Math.min(...expenses);
  const max = Math.max(...expenses);
  const minItem = document.createElement("li");
  minItem.innerText = `Min: $ ${min}`;
  const maxItem = document.createElement("li");
  maxItem.innerText = `Max: $ ${max}`;
  results.append(minItem);
  results.append(maxItem);
  results.classList.remove("hide");
};

// Write click event listener for 'button' and call the showMinMax function
button.addEventListener("click", function () {
  showMinMax(expenses);
  button.disabled = true;
});
