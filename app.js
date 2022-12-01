const formSubmit = document.getElementById('form')
const firstName = document.querySelector('.first')
const lastName = document.querySelector('.last')
const emailAddress = document.querySelector('.email')
const password = document.querySelector('.password')
const firstNameError = document.querySelector('.err-first')
const lastNameError = document.querySelector('.err-last')
const emailError = document.querySelector('.err-email')
const passwordError = document.querySelector('.err-password')

formSubmit.addEventListener('submit', e => {
    e.preventDefault();

    if(firstName.value == null || firstName.value === ''){
        firstNameError.classList.remove('hidden')
        firstName.style.border = '1px solid hsl(0, 100%, 74%)'
    }else {
        firstNameError.classList.add('hidden')
        firstName.style.border = '1px solid hsl(246, 25%, 77%)'
    }

    if(lastName.value == null || lastName.value === ''){
        lastNameError.classList.remove('hidden')
        lastName.style.border = '1px solid hsl(0, 100%, 74%)'
    }else {
        lastNameError.classList.add('hidden')
        lastName.style.border = '1px solid hsl(246, 25%, 77%)'
    }

    if(emailAddress.value == null || emailAddress.value === ''){
        emailError.classList.remove('hidden')
        emailAddress.style.border = '1px solid hsl(0, 100%, 74%)'
    }
    else {
        emailError.classList.add('hidden')
        emailAddress.style.border = '1px solid hsl(246, 25%, 77%)'
    }
    ValidateEmail(emailAddress)
    
    if(password.value == null || password.value === ''){
        passwordError.classList.remove('hidden')
        password.style.border = '1px solid hsl(0, 100%, 74%)'
    }else {
        passwordError.classList.add('hidden')
        password.style.border = '1px solid hsl(246, 25%, 77%)'
    }
    validPassword(password)
})

//Email validation
function ValidateEmail(inputText)
{
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat) && inputText.value !== ''){
        return true;
    }else if(inputText.value === '')
        emailError.innerText = "email cannot be empty";
    else {
        emailError.classList.remove('hidden')
        emailAddress.style.border = '1px solid hsl(0, 100%, 74%)'
        emailError.innerText = "You have entered an invalid email address!";
        return false;
    }
}

//password validation
function validPassword(pass) {
    if(pass.value.length <= 7 && pass.value !== '') {
        passwordError.classList.remove('hidden')
        password.style.border = '1px solid hsl(246, 25%, 77%)'
        passwordError.innerText = 'Password must be greater than 8 digits'
    }else if(pass.value === ''){
        passwordError.innerText = 'Password cannot be empty'
    }
}