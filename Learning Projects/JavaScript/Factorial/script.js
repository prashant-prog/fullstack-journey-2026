function calculateFactorial() {
  let num = document.getElementById("number").value;
  let fact = 1;

  if (num === "" || num < 0) {
    document.getElementById("result").innerText =
      "Please enter a valid non-negative number";
    return;
  }

  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }

  document.getElementById("result").innerText =
    "Factorial is: " + fact;
}
