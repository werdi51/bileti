const btn =document.querySelector('.btn');

const fromValue = document.querySelector('#from_value');

const toValue = document.querySelector('#to_value');

const result = document.querySelector('.result');

const number = 1;

btn.addEventListener('click', () => {
    result.textContent = `${funcResult(number,fromValue.value, toValue.value)}`;
})

const funcResult = (number,from, to) => {

    var Percent = 0;

    switch(from){
        // case "m->in" : return number / 2.54 / 100;
        // case "in->m" : return number * 2.54 * 100
        
        // case "m->ft" : return number / 0.3048;
        // case "ft->m" : return number * 0.3048;

        // case "m->yd" : return number / 0.9144;
        // case "yd->m" : return number * 0.9144;


        case "m" :  number; break;
        case "in" :  number * 2.54 / 100; break;
        case "ft" :  number * 0.3048; break;
        case "yd" :  number * 0.9144; break;

    }
 
    switch (to)
    {

        case "m" : return Percent;
        case "in" : return Percent / 2.54 / 100;
        case "ft" : return Percent / 0.3048;
        case "yd" : return Percent / 0.9144;

    }



}