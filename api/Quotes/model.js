const { Schema, model } = require('mongoose')

const QuotesSchema = new Schema({

    QuoteName : {
        type: String,
        required: true,
    },
    Quote: {
        type: String,
        required: true
    },

    
})
const  Quotes = model('Quotes', QuotesSchema)
module.exports =  Quotes 