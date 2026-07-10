const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("#btn");
const swapIcon = document.querySelector("#swap-icon");

const fromCurrElement = document.querySelector(".from select");
const toCurrElement = document.querySelector(".to select");
const result = document.querySelector(".msg");

// Load last selected currencies from localStorage, or set defaults
const savedFromCurrency = localStorage.getItem("fromCurrency") || "USD";
const savedToCurrency = localStorage.getItem("toCurrency") || "INR";

// Populate dropdowns and set default selection
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if (select.name === "from" && currCode === savedFromCurrency) {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === savedToCurrency) {
            newOption.selected = "selected";
        }

        select.append(newOption);
    }

    // Initialize flags on load
    updateFlag(select);

    // Update flag and save preference on change
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
        localStorage.setItem(`${evt.target.name}Currency`, evt.target.value);
        updateExchangeRate();
    });
}

// Function to update country flag
function updateFlag(element) {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    if (img) {
        img.src = newSrc;
    }
}

// Function to fetch exchange rate and calculate amount
async function updateExchangeRate() {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;

    // Default amount to 1 if input is empty or invalid
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    let fromCurrValue = fromCurrElement.value.toLowerCase();
    let toCurrValue = toCurrElement.value.toLowerCase();
    const URL = `${BASE_URL}/${fromCurrValue}.json`;

    try {
        result.innerText = "Getting rate...";
        let response = await fetch(URL);
        if (!response.ok) {
            throw new Error("Unable to fetch exchange rate");
        }
        let data = await response.json();
        let rate = data[fromCurrValue][toCurrValue];

        let finalAmount = (amtVal * rate).toFixed(2);
        result.innerText = `${amtVal} ${fromCurrElement.value} = ${finalAmount} ${toCurrElement.value}`;
    } catch (error) {
        result.innerText = "Error loading rate. Try again.";
        console.error(error);
    }
}

// Swap currencies when clicking the swap button
swapIcon.addEventListener("click", () => {
    let temp = fromCurrElement.value;
    fromCurrElement.value = toCurrElement.value;
    toCurrElement.value = temp;

    // Update flags for both selects
    updateFlag(fromCurrElement);
    updateFlag(toCurrElement);

    // Save preferences
    localStorage.setItem("fromCurrency", fromCurrElement.value);
    localStorage.setItem("toCurrency", toCurrElement.value);

    // Re-calculate exchange rate
    updateExchangeRate();
});

// Calculate conversion on page load and form submit
window.addEventListener("load", () => {
    updateExchangeRate();
});

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});
