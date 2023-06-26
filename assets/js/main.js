const amountInput = document.querySelector("#amount");
const firstoption = document.querySelector("#firstCurrencyOption");
const secondoption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

const currency = new Currency();

runEventListeners();

function runEventListeners() {
  amountInput.addEventListener("input", exchange);
}

function exchange() {
  let amount = Number(amountInput.value.trim());

  const firstOptionvalue =
    firstoption.options[firstoption.selectedIndex].textContent;
  const secondOptionvalue =
    secondoption.options[secondoption.selectedIndex].textContent;

  currency
    .exchange(amount, firstOptionvalue, secondOptionvalue)
    .then((result) => {
      resultInput.value = result.toFixed(3);
    });
}
