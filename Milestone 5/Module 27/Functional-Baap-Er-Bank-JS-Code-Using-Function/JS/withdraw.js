document.getElementById('btn-withdraw').addEventListener('click', function(){
    /* 1. get the input field by id 
       2. get the input field value
       3. convert string value to number   
    */

    const newWithdrawAmount = getInputFieldValueById('user-withdraw');
    
    // 4. get the previous withdraw amount by id
    const previousWithdrawAmount = getDisplayElementValueById('withdraw-total');
    
    // 5. calculate new total withdraw
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    // 6. set the new total withdraw value
    setNewDisplayElementValueById('withdraw-total', newWithdrawTotal)

    // 7. get the previous balance amount by id
    const previousBalanceAmount = getDisplayElementValueById('balance-total')

    // 8. calculate new balance after withdraw
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;

    // 9. set the new total balance
    setNewDisplayElementValueById('balance-total', newBalanceTotal)


})