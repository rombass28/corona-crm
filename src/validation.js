class form {

    isName(str) {
        if (str.indexOf(' ') !== -1) {
            return true;
        }
        alert("You have entered an wrong name!")
        return false;
    }

    minLength(str, min) {
        if (str.length >= min) {
            return true;
        }
        alert("You have entered an wrong name!")
        return false;
    }

    maxLength(str, max) {
        if (str.length <= max) {
            return true;
        }
        alert("You have entered an wrong name!")
        return false;
    }
    isEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    }
    validateEmail(emailField){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailField.value) == false) 
        {
            alert('Invalid Email Address');
            return false;
        }

        return true;

}

    isDate() {

    }

    notes() {

    }

    isOverEighteen() {

    }

}


module.exports = validation;