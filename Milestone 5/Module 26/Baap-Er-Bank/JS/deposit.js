// step-1: add event listener in deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the user-deposit input field
    const userDeposit = document.getElementById('user-deposit');
    const newDepositAmountString = userDeposit.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-7: clear the withdraw field
    userDeposit.value = '';

    // validation [checking empty or string as input]
    if(isNaN(newDepositAmount)){
        alert('Please enter valid numbers.');
        return;
    }


    // step-3: get the previous deposit total amount
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositAmountString = depositTotalElement.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    // step-4: add new + previous amount to set the total deposit
    depositTotalElement.innerText = newDepositAmount;
    const currentDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get the previous balance amount before deposit
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceAmountString = balanceTotalElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);

    // step-6: update the balance after deposit amount
    const currentBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7: clear the deposit field
    // userDeposit.value = '';
})