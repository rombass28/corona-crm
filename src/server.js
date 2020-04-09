const express = require('express');
const bodyParser = require('body-parser');
const isFullName = require('../utilities/is-full-name');
const isEmail = require('../utilities/is-email');
const app = express();
const port = 3000;
let customers = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/customer', (req, res) => {
	res.json(customers);
});

app.listen(port, () => {
	console.log('App is listening on port ' + port);
});



app.put('/customer', (req, res) => {
    if(! validateCustomer(req.body.fullName, req.body.email)) {
		res.sendStatus(400);
		return;
	}
    const index = customers.push({
		id: customers.length + 1,
		fullName: req.body.fullName,
        email: req.body.email,
		birthdate: req.body.birthdate,
        notes: req.body.notes,
        overEighteen: req.body.overEighteen
    });
    res.status(201).send(customers[index]);
});


app.get('/customer/:id', (req, res) => {
    const requestedCustomer = customers.find(customer => {
        return customer.id === parseInt(req.params.id);
    });
    if(!requestedCustomer) {
        res.status(404).send();
        return;
    }
    res.status(200).json(requestedCustomer);
});


app.post('/customer/:id', (req, res) => {
    const requestedCustomer = customers.find(customer => {
        return customer.id === parseInt(req.params.id);
    });
    if(! validateCustomer(req.body.fullName, req.body.email)) {
		res.sendStatus(400);
		return;
	}
    const index = customers.indexOf(requestedCustomer);
	customers[index] = {
		fullName: req.body.fullName,
        email: req.body.email,
        birthDate: req.body.birthdate,
		notes: req.body.notes
	};
	res.json(customers[index]);
});

app.delete('/customer/:id', (req, res) => {
	const requestCustomer = customers.find(customer => {
		return customer.id === parseInt(req.params.id);
	});
	if (!requestCustomer) {
		res.status(404).send();
		return;
	}
	const index = customers.indexOf(requestCustomer);
	customers.splice(index, 1);
    res.json(requestedCustomer);
});

function validateCustomer(fullName, email) {
    return isFullName(fullName) && isEmail(email);
}
