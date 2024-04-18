const inputEl = document.getElementById("input-field");
const convertBtn = document.getElementById("convert-btn");
const lengthText = document.getElementById("length-para");
const volumeText = document.getElementById("volume-para");
const massText = document.getElementById("mass-para");

//conversion for each unit.
const unit = {
  meter: 3.281,
  feet: 0.3048,
  litre: 0.219969,
  gallon: 4.54609,
  kilo: 2.20462,
  pound: 0.453592,
};

// function is checking whether or not the inputEl is empty. If it isn't the value that is entered, will be converted when the "convert" button is hit.
convertBtn.addEventListener("click", () => {
  if (inputEl.value != "") {
    lengthText.innerHTML = `
     ${inputEl.value} meters = ${(inputEl.value * unit.meter).toFixed(
      3
    )} feet |  ${inputEl.value} feet = ${(inputEl.value * unit.feet).toFixed(
      3
    )} meters`;
    volumeText.innerHTML = `
    ${inputEl.value} liters = ${(inputEl.value * unit.litre).toFixed(
      3
    )} gallons |  ${inputEl.value} gallons = ${(
      inputEl.value * unit.gallon
    ).toFixed(3)} liters
  `;
    massText.innerHTML = `
    ${inputEl.value} kilos = ${(inputEl.value * unit.kilo).toFixed(
      3
    )} pounds |  ${inputEl.value} pounds = ${(
      inputEl.value * unit.pound
    ).toFixed(3)} kilos
  `;
  }
});
