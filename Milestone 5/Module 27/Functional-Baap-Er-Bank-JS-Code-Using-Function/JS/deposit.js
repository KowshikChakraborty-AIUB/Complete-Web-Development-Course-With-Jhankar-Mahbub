document.getElementById('btn-deposit').addEventListener('click', function(){
    /* 1. get the input field by id 
       2. get the input field value
       3. convert string value to number   
    */

    const newDepositAmount = getInputFieldValueById('user-deposit');
    
    // 4. get the previous deposit amount by id
    const previousDepositAmount = getDisplayElementValueById('deposit-total');
    
    // 5. calculate new total deposit
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    // 6. set the new total deposit value
    setNewDisplayElementValueById('deposit-total', newDepositTotal)

    // 7. get the previous balance amount by id
    const previousBalanceAmount = getDisplayElementValueById('balance-total')

    // 8. calculate new balance after adding deposit
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;

    // 9. set the new total balance
    setNewDisplayElementValueById('balance-total', newBalanceTotal)


})