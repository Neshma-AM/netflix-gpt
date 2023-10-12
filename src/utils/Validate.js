export const checkValidity = (mail, pass) => {
const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/;
const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

   // const validateName = isNameValid.test(name);
    const validateEmail = isEmailValid.test(mail);
    const validatePassword = isPasswordValid.test(pass);

    // if(!validateName) {
    //     return "Name is invalid"
    // }
    if(!validateEmail) {
        return "Email is not valid"
    }
    if(!validatePassword) {
        return "Password is invalid"
    }
    return "";
}