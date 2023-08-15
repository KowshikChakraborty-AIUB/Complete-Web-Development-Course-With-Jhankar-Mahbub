//step-1: adding click event handler in submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email id inside the email input field
    const emailField = document.getElementById('user-email');
    const emails = emailField.value;

    // step-3: get the password inside the password field
    const passwordField = document.getElementById('user-password');
    const passwords = passwordField.value;

    // step-4: varify email & password [note: do not use this technique of varifying user/password! it's not the ideal way!]
    if(emails === 'kowshik@gmail.com' && passwords === 'kowshik1234'){
        window.location.href='bank.html';
    }else{
        alert('invalid user');
    }
})

