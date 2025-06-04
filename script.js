// Select elements
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const calculateButton = document.querySelector('#calculateBtn');
const resultDiv = document.querySelector('#results');

calculateButton.addEventListener('click', function () {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  // Validate input
  if (isNaN(height) || height <= 0) {
    resultDiv.innerHTML = `❌ Please enter a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    resultDiv.innerHTML = `❌ Please enter a valid weight.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let status = '';

    if (bmi < 18.6) {
      status = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      status = 'Normal';
    } else {
      status = 'Overweight';
    }

    resultDiv.innerHTML = `✅ Your BMI is <strong>${bmi}</strong> (${status})`;
  }
});
