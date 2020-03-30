const API_URL = 'http://localhost:3000';
const newCustomerForm = document.getElementById('new-customer-form');

newCustomerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(! validate(newCustomerForm)) {
        return;
    }

     createCustomer({
        fullName: newCustomerForm.fullName.value,
        email: newCustomerForm.email.value,
        birthdate: newCustomerForm.birthdate.value,
        notes: newCustomerForm.notes.value,
    });
});

function createCustomer(customer) {
    return fetch(API_URL + '/customer', {
		method: 'PUT',
        body: JSON.stringify(customer),
        headers: {
            'Content-Type': 'application/json'
        }
	});
}

function validate(form) {
    if(! form.over18.checked) {
        return false;
    }
    return true;
}

function getCustomers() {
    fetch()
}

function refreshCustomerList () {
    
}