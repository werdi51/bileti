const btn =document.querySelector('.btn');

const fromValue = document.querySelector('#from_value');

const toValue = document.querySelector('#to_Value');

const result = document.querySelector('.result');

btn.addEventListener('click', () => {
    result.textContent = `${funcResult(fromValue.value, toValue.value)}`;
})

const funcResult = (from, to) => {
    switch(from + "->" + to){

        case "m->in" : return 1 / 2.54 / 100;
        case "in->m" : return 1 * 2.54 * 100
        
        case "m->ft" : return 1 / 0.3048;
        case "ft->m" : return 1 * 0.3048;

        case "m->yd" : return 1 / 0.9144;
        case "yd->m" : return 1 * 0.9144;

    }
}