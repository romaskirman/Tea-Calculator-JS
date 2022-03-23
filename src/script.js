const amount = document.getElementById('amount');
const guests = document.getElementById('guests');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');

calculate = () =>{
    const tip = ((amount.value * quality.value) / (guests.value)).toFixed(2);
    console.log(tip);
    if(tip === 'NaN' || tip < 0){
        tipAmount.innerHTML = 'Incorrect input!';
        showTipAmount();
    }
    else if(amount.value <= 0 || guests.value <= 0){
        tipAmount.innerHTML = 'Incorrect input!';
        showTipAmount();
    }
    else if(quality.value == 0){
        tipAmount.innerHTML = 'Choose quality!';
        showTipAmount();
    }
    else{
        tipAmount.innerHTML = 'Tip $' + tip + ' each';
        showTipAmount();
    }
    amount.value = '';
    guests.value = '';
    quality.value = '';
}

showTipAmount = () =>{
    var x = tipAmount;
    x.className = 'show';
    setTimeout(function (){
        x.className = x.className.replace('show', '');
    }, 3000);
}