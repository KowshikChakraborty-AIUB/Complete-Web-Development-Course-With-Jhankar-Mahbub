// step-1: add event listener in deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the user-deposit input field
    const userDeposit = document.getElementById('user-deposit');
    const depositAmount = userDeposit.value;

    // step-3: get the current deposit total amount
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;
})