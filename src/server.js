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
    customers.push({
		id: customer.length + 1,
		name: req.body.name,
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
    const requestCustomer = customers.find(user => {
        return customer.id === parseInt(req.params.id);
    });
    if(!requestCustomer){
        res.status(404).send();
        return;
    }
    res.status(200).send();
});

//BEST WAY TO DO THE APP.DELETE
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
