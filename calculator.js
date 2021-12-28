window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}
// const amountValue = document.getElementById("loan-amount").value;
// const yearValue = document.getElementById("loan-years").value;
// const rateValue = document.getElementById("loan-rate").value;

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let defValues = {
  amount: document.getElementById("loan-amount").value = 1000,
  years: document.getElementById("loan-years").value = 5,
  rate: document.getElementById("loan-rate").value = 6
  }
  calculateMonthlyPayment(defValues);
  // console.log(defValues)
}
// Get the current values from the UI
// Update the monthly payment
function update() {
  let inputValues = {
    amount: document.getElementById("loan-amount").value,
    years: document.getElementById("loan-years").value,
    rate: document.getElementById("loan-rate").value
    }
    calculateMonthlyPayment(inputValues);
    // console.log(inputValues);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = document.getElementById("loan-amount").value;
  let i = document.getElementById("loan-rate").value/100;
  i = (i/12)
  let n = document.getElementById("loan-years").value*12;
  let monthlyPayment = (p * i) / (1 - (1 + i)**-n);
  monthlyPayment = monthlyPayment.toFixed(2);
  // console.log(monthlyPayment);
  updateMonthly(monthlyPayment);
}


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUi = document.getElementById("monthly-payment")
  monthlyUi.innerText = "$" + monthly;
  // console.log(monthlyUi);

}
