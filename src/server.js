const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
let customers = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send('hello');
});

app.listen(port, () => {
	console.log('App is listening on port ' + port);
});



app.put('/customer', (req, res) => {
    const fullName = req.body.fullName;
	const email = req.body.email;
	if (!fullName.match(/^[a-zA-Z ]*$/) || fullName.split(' ').length < 2 || !email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
		return res.status(400).send();
	}
    customers.push({
		id: customers.length + 1,
		fullName: req.body.fullName,
        email: req.body.email,
		birthdate: req.body.birthdate,
        notes: req.body.notes,
        overEighteen: req.body.overEighteen
    });
    res.status(201).send();
});

app.get('/customer', (req, res) => {
    res.json(customers);
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
    const requestCustomer = customers.find(customer => {
        return customer.id === parseInt(req.params.id);
    });
    if(!requestCustomer){
        res.status(404).send();
        return;
    }
    const index = customers.indexOf(requestedCustomer);
	customers[index] = {
		fullName: req.body.fullName,
		email: req.body.email,
	};
	res.json(customers[index]);
    res.status(200).send();
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
	res.status(204).send();
});
