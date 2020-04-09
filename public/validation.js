function validate(form) {
    let isValid = true;
	let errors = form.querySelectorAll('.invalid-feedback');
	for(let error of errors) {
		error.style.display = 'none';
    }
    

	if(! form.over18.checked) {
		form.querySelector('.over18 .invalid-feedback').style.display = 'block';
		isValid = false;
	}

	if(! isFullName(form.fullName.value)) {
		form.querySelector('.fullName .invalid-feedback').style.display = 'block';
		isValid = false;
	}

	if(! isEmail(form.email.value)) {
		form.querySelector('.email .invalid-feedback').style.display = 'block';
		isValid = false;
	}

	return isValid;
    // if(! form.over18.checked) {
    //     document.getElementById('eighteenError').textContent = 'Sorry you are not 18 years old';
    //     return false;
    // }
    // if (! form.email.value) {
    //     document.getElementById('emailError').textContent = 'Sorry the email is incorrect';
    //     return false;
    // }
    // if(form.fullName.value.split(" ").length < 2){
    //     document.getElementById('fullNameError').textContent = 'Sorry full name is incorrect';
    //     return false;
    // }
    // if (!form.fullName.value || form.email.value || !form.over18.checked){
    //     return false;
    // }
    // return true;
}

function isEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function isFullName(fullName) {
	const parts = fullName.split(' ');
	return parts.length === 2;
}