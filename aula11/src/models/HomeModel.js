const mongoose = require('mongoose');
const homeSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descripcion: {type: String, required: true}
});
const homeModel = mongoose.model('Home', homeSchema);
module.exports = homeModel;