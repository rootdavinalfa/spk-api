const Supplier = require('../models/supplier.js');
const except = require('../exception/exp')
class SupplierRepository {
    constructor(model) {
        this.model = model;
    }
    create(data) {
        console.log(data)
        if (data == null || data == undefined) {
            return except.returnNoInput("No Data Inputed")
        } else {
            const item = new this.model();
            item.collection.deleteMany({itemid: data[0].itemid})
            return item.collection.insertMany(data)
        }
    }

    findbyitemid(itemid) {
        return this.model.find({
            itemid: itemid
        })
    }

    findAll() {
        return this.model.find();
    }

    //find todo by the id
    findById(id) {
        return this.model.findById(id);
    }


    deleteById(id) {
        return this.model.findByIdAndDelete(id);
    }
}

module.exports = new SupplierRepository(Supplier);