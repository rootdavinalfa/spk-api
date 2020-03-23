const Item = require('../models/items.js');
const except = require('../exception/exp')
class ItemRepository {

    constructor(model) {
        this.model = model;
    }
    create(name) {
        console.log(name)
        if (name == "" || name == undefined) {
            return except.returnNoInput("No Name Inputed")
        } else {
            console.log(name)
            const newItem = {
                name
            };
            const item = new this.model(newItem);

            return item.save();
        }
    }

    
    findAll() {
        return this.model.find();
    }

    //find todo by the id
    findById(id) {
        return this.model.findById(id);
    }

    // delete todo
    deleteById(id) {
        return this.model.findByIdAndDelete(id);
    }
}

module.exports = new ItemRepository(Item);