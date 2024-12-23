const form = document.getElementById('form')
const Username_input = document.getElementById('Username-input')
const firstname_input = document.getElementById('firstname-input')
const lastname_input = document.getElementById('lasttname-input')
const Email_input = document.getElementById('Email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')


form.addEventListener ('submit', (e)=> {
   // e.preventDefault()

   let errors = []

   if (firstname_input) {
    // if we have a firstname input then we are in the signup page
    errors = getSignupFormErrors(firstname_input.ariaValueMax, Email_input.value, repeat_password_input.value)
   }
   else{
    // if we dont have a frist name we are in the login page 
    errors = getLoginFormErrors( Email_input.value, repeat_password_input.value)
}
if (errors.length > 0) {
   e.preventDefault()
   error_message.innerText = errors.join(", ")
}
})

function getSignupFormErrors(firstname, Email, password, repeatPassword) {
    let errors = []

    if (firstname === '' || firstname == null) {
        errors.push ('firstname is required') 
        firstname_input.parentElement.classList.add('incorrect')
    }
    if (Email === '' || Email == null) {
        errors.push ('Email is required') 
        Email_input.parentElement.classList.add('incorrect')
    }
    if (password === '' || password == null) {
        errors.push ('password is required') 
        password_input.parentElement.classList.add('incorrect')
    }
    return errors;
}