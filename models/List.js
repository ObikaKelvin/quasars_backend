const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for this list"]
    }
});

const List = mongoose.model('List', listSchema);

module.exports = List;