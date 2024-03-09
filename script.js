// Inside script.js
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.plan button');
    const currencySelect = document.getElementById('currency-select');
    const unitSelect = document.getElementById('unit-select');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const planName = this.parentElement.querySelector('h2').textContent;
            const price = this.parentElement.querySelector('.price').textContent;
            const currency = currencySelect.value;
            const unit = unitSelect.value;

            // Dynamic pricing information based on user selections
            const selectedCurrency = currency === '$' ? 'USD' : (currency === '€' ? 'EUR' : 'GBP');
            const selectedUnit = unit === 'month' ? 'per Month' : 'per Year';

            alert(`You've selected the ${planName} plan for ${price} ${selectedCurrency} ${selectedUnit}.`);
            // Add further actions as needed, such as redirection to a signup page
        });
    });
});
