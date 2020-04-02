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

    isDate() {

    }

    notes() {

    }

    isOverEighteen() {

    }

}
