let amount = document.querySelector('#bill');
let percent = document.querySelector('#tip');
let people = document.querySelector('#no_of_people');
let calculate = document.querySelector("#Calculate_button");
let des = document.querySelector('#each');
let tip = document.querySelector('#tip_indivisual');

//calculate button
calculate.addEventListener('click', () => {
    //inavlid input
    if(amount.value == '' || people.value == ''){
        alert("please enter the required imformation.thank you.");
        return;
    }

    if(people.value == ''|| people.value <= 1 ){
        people = 1;
        des.innerHTML = '';
    }
    
    //calculate the total tip
    let total = (amount.value * percent.value) / people.value ;
    total = Math.round(total*100) / 100 ; // rounding values
    total = total.toFixed(2);
    if(total ==='NaN'){
        total = "0.00";
    }
    tip.innerHTML = total; 

    //resetting the input boxes
    amount.value = '';
    people.value = '';
    percent.value = '0';
})

