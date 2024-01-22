        function purchase(plan) {
            alert(`You have selected the ${plan} Plan. Thank you for your purchase!`);
        }
       
        const billToggle = document.getElementById('billToggle');
        const priceContainer = document.getElementById('pricing-container');
        const basicBonanza = document.getElementById('basicBonanza');
        const premiumCombo = document.getElementById('premiumCombo');
        const premiumBonanza = document.getElementById('premiumBonanza');
        const stormBonanza = document.getElementById('stormBonanza');
        const basic = document.getElementById('basic');
        const premium = document.getElementById('premium');
        const storm = document.getElementById('storm');
        const lightening = document.getElementById('lightening');

        const yearlyDiscount = 0.9;

        billToggle.addEventListener('change', () => {
            if (billToggle.checked) {
                basicBonanza.textContent = `₹${(650 * 12 * yearlyDiscount)}/year`;
                premiumCombo.textContent = `₹${(950 * 12 * yearlyDiscount)}/year`;
                premiumBonanza.textContent = `₹${(1050 * 12 * yearlyDiscount)}/year`;
                stormBonanza.textContent = `₹${(1250 * 12 * yearlyDiscount)}/year`;
                basic.textContent = `₹${(540 * 12 * yearlyDiscount)}/year`;
                premium.textContent = `₹${(740 * 12 * yearlyDiscount)}/year`;
                storm.textContent = `₹${(1180 * 12 * yearlyDiscount)}/year`;
                lightening.textContent = `₹${(1270 * 12 * yearlyDiscount)}/year`;

            } else {
                basicBonanza.textContent = '₹650/month';
                premiumCombo.textContent = '₹950/month';
                premiumBonanza.textContent = '₹1050/month';
                stormBonanza.textContent = '₹1250/month';
                basic.textContent = '₹540/month';
                premium.textContent = '₹740/month';
                storm.textContent = '₹1180/month';
                lightening.textContent = '₹1270/month';

            }
        });

       
        