let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes)

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

let engine = (id, serial, message) => {
    //trim() will not count spaces as values
    if( id.value.trim() === '' ){
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = '1'
        successIcon[serial].style.opacity = '0'
    } else {
        errorMsg[serial].innerHTML = ''
        successIcon[serial].style.opacity = '1'
        failureIcon[serial].style.opacity = '0'
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username, 0, 'Username cannot be blank')
    engine(email, 1, 'Email cannot be blank')
    engine(password, 2, 'Password cannot be blank')
})


