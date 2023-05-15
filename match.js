passwd = document.getElementById('pass');
confpasswd = document.getElementById('confpass')

passwd.addEventListener('keyup',validate_password);
confpasswd.addEventListener('keyup',validate_password);

function validate_password() { 
    const pass = passwd.value;// document.getElementById('pass').value;
    const confirm_pass = confpasswd.value;// document.getElementById('confpass').value;

    if (pass != confirm_pass) {
        document.getElementById('wrong_pass_alert').style.color = 'red';
        document.getElementById('wrong_pass_alert').innerHTML
            = '☒ Use same password';
        confpasswd.style.border="1px solid rgba(194, 16, 16, 1)";
        confpasswd.style.boxShadow="0 0 5px rgb(194, 16, 16)";
    } else {
        document.getElementById('wrong_pass_alert').style.color = 'green';
        document.getElementById('wrong_pass_alert').innerHTML =
            '🗹 Password Matched';
        confpasswd.style.border="1px solid rgba(81, 203, 238, 1)";
        confpasswd.style.boxShadow="0 0 5px rgba(81, 203, 238, 1)";
    }
}


const btn = document.getElementById("btn");
btn.addEventListener('click',()=>{
    alert("Welcome to page dedicated to Mopin, my pet dog");
})
