document.addEventListener("DOMContentLoaded", function () {
    // Elements
    const metricRadio = document.getElementById("metric");
    const imperialRadio = document.getElementById("imperial");
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const resultElement = document.querySelector(".result p:nth-child(2)");

    // Event listeners for BMI calculation
    metricRadio.addEventListener("change", updateUnits);
    imperialRadio.addEventListener("change", updateUnits);
    heightInput.addEventListener("input", calculateBMI);
    weightInput.addEventListener("input", calculateBMI);

    // Function to update units based on selection
    function updateUnits() {
        if (metricRadio.checked) {
            heightInput.placeholder = "0";
            weightInput.placeholder = "0";
            heightInput.nextElementSibling.textContent = "cm";
            weightInput.nextElementSibling.textContent = "kg";
        } else if (imperialRadio.checked) {
            heightInput.placeholder = "0";
            weightInput.placeholder = "0";
            heightInput.nextElementSibling.textContent = "inches";
            weightInput.nextElementSibling.textContent = "lbs";
        }
        calculateBMI();
    }

    // Function to calculate BMI
    function calculateBMI() {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            resultElement.textContent = "Please enter valid height and weight values.";
            return;
        }

        let bmi;
        if (metricRadio.checked) {
            bmi = weight / ((height / 100) * (height / 100)); // Metric formula
        } else if (imperialRadio.checked) {
            bmi = (weight / (height * height)) * 703; // Imperial formula
        }
        if(bmi < 18.5){
            resultElement.textContent = "Your BMI is: " + bmi.toFixed(2) +". You are under weight"
        }
        else if(bmi > 18.5 && bmi < 24.5){
            resultElement.textContent = "Your BMI is: " + bmi.toFixed(2) + ". You are at a healthy weight"
        }
        else if(bmi > 24.5){
            resultElement.textContent = "Your BMI is: " + bmi.toFixed(2) + ". You are over weight"
        }

     
    }

    // Initialize with default settings
    updateUnits();
});
