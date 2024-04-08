const mongoose = require('mongoose'); 
mongoose.connect('mongodb+srv://Chayan-Sarkar:Cs2vRP2wIinrmtcV@card-app-cluster.cvp39f7.mongodb.net/'); 
const cardSchema = mongoose.Schema({
    name: String,
    description: String, 
    instalink: String,
    xlink:String, 
    interest: String 
})
const card = mongoose.model('card', cardSchema); 
module.exports = { 
    card
}