var mongoose = require('mongoose')

var QuoteSchema = new mongoose.Schema({
    name: { type: String},
    quote: { type: String},
}, { timestamps: true } );

var Quote = mongoose.model('Quote',QuoteSchema);