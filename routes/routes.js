const express = require('express');

const app = express.Router();
const repository = require('../repo/itemrepo.js');
const repsupplier = require('../repo/supplyrepo.js')

//Return all available data.
app.get('/', (req, res) => {
    repository.findAll().then((items) => {
        res.json(items);
    }).catch((error) => console.log(error));
});

// add a item
app.post('/', (req, res) => {
    const {
        name
    } = req.body;
    repository.create(name).then((item) => {
        res.json(item);
    }).catch((error) => console.log(error));
});

// delete a item
app.delete('/:id', (req, res) => {
    const {
        id
    } = req.params;
    repository.deleteById(id).then((ok) => {
        console.log(ok);
        console.log(`Deleted record with id: ${id}`);
        res.status(200).json([]);
    }).catch((error) => console.log(error));
});



app.get('/supplier', (req, res) => {
    repsupplier.findAll().then((suppliers) => {
        res.json(suppliers);
    }).catch((error) => console.log(error));
});

app.get('/supplier/:item', (req, res) => {
    const {
        item
    } = req.params;
    repsupplier.findbyitemid(item).then((suppliers) => {
        res.json(suppliers);
    }).catch((error) => console.log(error));
});

app.post('/supplier/save', (req, res) => {
    var data = []
    for (var key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            item = req.body[key];
            data.push({
                itemid: item.itemid,
                supplier: item.supplier,
                harga: item.harga,
                sni: item.sni,
                beli: item.beli,
            })
        }
    }
    repsupplier.create(data).then((item) => {
        res.json(item);
    }).catch((error) => console.log(error));
})
module.exports = app;