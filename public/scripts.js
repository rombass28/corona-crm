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
        document.getElementById('eighteeenError').textContent = 'Sorry you are not 18 years old';
        return false;
    }
    if (! form.email.value) {
        document.getElementById('emailError').textContent = 'Sorry the email is incorrect';
        return false;
    }
    if(form.fullName.value.split(" ").length < 2){
        document.getElementById('fullNameError').textContent = 'Sorry full name is incorrect';
        return false;
    }
    if (!form.fullName.value || form.email.value || !form.over18.checked){
        return false;
    }
    return true;
}



function getCustomers() {
    return fetch(API_URL+'/customer')
    .then(response => response.json())
    .then(refreshCustomers())
    .then(customersList => {   
    
    tBody.innerHTML = '';
    customersList.forEach((customer)=>{
  
    })
 
})

}

function refreshCustomerList () {
    tbody.innerHTML = '';
}