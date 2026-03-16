const btn = document.querySelector('.btn');

const sum = document.querySelector('#sum');
const prc = document.querySelector('#prc');
const year = document.querySelector('#year');

const monthpay = document.querySelector('#monthpay');
const pay = document.querySelector('#pay');
const overpay = document.querySelector('#overpay');

prc.addEventListener('input', () => {
    document.querySelector(`.prc`).textContent = prc.value;
})

year.addEventListener('input', () => {
    document.querySelector(`.year`).textContent = year.value;
})

btn.addEventListener('click', () => {
    if (sum.value <= 0)
    {
        pay.value = "хамид лох"
        return
    }
    if (!parseInt(sum.value))
    {
        pay.value = "хамид лох"
        return
    }

    let prcMon = prc.value / 100 / 12;
    let mon = year.value / 12;

    monthpay.value = Math.round((sum.value * (prcMon * (1 + prcMon)**mon) / ((1 + prcMon)**mon - 1)));
    pay.value = Math.round(monthpay.value * mon);
    overpay.value = Math.round(pay.value - sum.value);
})