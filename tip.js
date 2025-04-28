const tipInput = document.querySelector("#tip");
const billInput = document.querySelector("#bill");
const button = document.querySelector("button");
const totalText = document.querySelector(".total-num");

//function to calculate tip
function calculateTip(bill, tip) {
  return bill * tip;
}

button.addEventListener("click", () => {
  let billNum = Number(billInput.value);
  let tipNum = Number(tipInput.value);
  totalText.textContent = `Total: $${calculateTip(billNum, tipNum)}`;
});