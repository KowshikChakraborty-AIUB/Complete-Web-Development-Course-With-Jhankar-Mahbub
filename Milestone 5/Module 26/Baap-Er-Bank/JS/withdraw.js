// step-1: add event listener in withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2: get the withdraw amount from the withdraw field
    const userWithdraw = document.getElementById('user-withdraw');
    const newWithdrawAmountString = userWithdraw.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Step-3: get previous withdraw amount 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    // step-4: add new + previous amount to set the total withdraw
    withdrawTotalElement.innerText = newWithdrawAmount;
    const currentWithDrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithDrawTotal;

    // step-5: get the previous balance amount before withdraw
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceAmountString = balanceTotalElement.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);

    // step-6: update the balance after withdraw amount
    const currentBalanceTotal = previousBalanceAmount - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


    // step-7: clear the withdraw field
    userWithdraw.value = '';
})