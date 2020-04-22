const API_URL = 'http://localhost:3000';
const newCustomerForm = document.getElementById('new-customer-form');
const customerList = document.getElementById('customer-list');
const editCustomerForm = document.getElementById('edit-customer-form');

refreshCustomerList();

newCustomerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validate(newCustomerForm)) {
        return;
    }

    createCustomer({
        fullName: newCustomerForm.fullName.value,
        email: newCustomerForm.email.value,
        birthdate: newCustomerForm.birthdate.value,
        notes: newCustomerForm.notes.value,
    }).then(refreshCustomerList)
        .catch(console.log);
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



function openEditCustomerModal(customer) {
    openModal();

    editCustomerForm.fullName.value = customer.fullName,
    editCustomerForm.email.value = customer.email,
    editCustomerForm.birthdate.value = customer.birthdate,
    editCustomerForm.notes.value = customer.notes;


    editCustomerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('hey');
        if (!validate(editCustomerForm)) {
            return;
        }

        closeModal();
        makeEditCustomer({
            id: customer.id,
            fullName: editCustomerForm.fullName.value,
            email: editCustomerForm.email.value,
            birthdate: editCustomerForm.birthdate.value,
            notes: editCustomerForm.notes.value,
        }).then(refreshCustomerList)
            .catch(console.log);
    });
}
function makeEditCustomer(customer) {
    return fetch(API_URL + `/customer/${customer.id}`, {
        method: 'POST',
        body: JSON.stringify(customer),
        headers: {
            'Content-Type': 'application/json'
        },
    });
}

function deleteCustomer(customerId) {
    return fetch(API_URL + `/customer/${customerId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });
}

function getCustomers() {
    return fetch(API_URL + '/customer');
}

function refreshCustomerList() {
    getCustomers()
        .then(res => res.json())
        .then(customers => {
            customerList.innerHTML = '';
            customers.forEach((customer, i) => {
                const row = buildCustomerRow(customer, i);
                customerList.appendChild(row);
            });
        })
        .catch(console.log);
}

function buildCustomerRow(customer, i) {
    const row = document.createElement('tr');
    row.innerHTML = `
		<td>${i + 1}</td>
		<td>${customer.fullName}</td>
		<td>${customer.email}</td>
		<td>${customer.birthdate}</td>
		<td>---</td>
		<td class="text-center">
            <button class="btn btn-sm btn-edit"><i class="far fa-edit"></i></button>
            <button class="btn btn-sm btn-delete"><i class="far fa-trash-alt"></i></button>
		</td>`;
    row.querySelector('.btn-edit').addEventListener('click', () => {
        console.log(customer);
        openModal(customer);
    });
    row.querySelector('.btn-delete').addEventListener('click', () => {
        deleteCustomer(customer.id)
            .then(refreshCustomerList)
            .catch((e) => console.log(e));
    });
    return row;
}

