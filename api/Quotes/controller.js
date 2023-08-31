const Quotes = require('./model')
const { connect } = require('mongoose')
require('dotenv').config()


const getAllQuote = async (req, res) => {
    const { QuoteName, Quote} = req.body;
    console.log({ QuoteName, Quote} )
   try {
    await connect(process.env.MONGO_URI)
    const allQuotes = await Quotes.find()
    res.json({
        message: "Quotes Get Successfully",
        Quotes : allQuotes
    })
   } catch (error) {
    res.json({
        message: error.message
    })
   }
};

const AddQuotes = async (req, res) => {

    const {QuoteName, Quote} = req.body;

    if( !QuoteName|| !Quote)
    {
       res.status(403).json({
          message : "Missing Required Field"
       })
    }
    else 
    {
       try {
          await connect(process.env.MONGO_URI)
          const QuoteExists = await Quotes.exists({  QuoteName })
         if (QuoteExists) {
             res.status(208).json({
                 message: "This Quote Already Exists",
             })
         }
         else{
          await Quotes.create({ QuoteName, Quote })
          const allQuotes = await Quotes.find()
          res.json({
             message: "Quote Added Successfully",
                 Quotes: allQuotes         
                })
 
         }
          
        } 
       
        catch (error) 
       {
   
          res.status(400).json
          ({
              message : error.message
          })}
          
       }
   
    }

const deleteQuote = async (req, res) => {
    try {
        const { _id } = req.body
      await connect(process.env.MONGO_URI)
      await Quotes.findOneAndDelete({ _id })
      const Quote = await Quotes.find()
      res.status(200).json({ 
         message :"Deleted Successfully"
         ,Quote})
    } 
    catch (error) {
        res.status(400).json({
            message : error.message
        }) 
    }
}

const updateQuoteById = async (req, res) => {
    const {_id,QuoteName,Quote} = req.body
    const filter = { _id};
    const update = {QuoteName,Quote};
    try {
        await connect(process.env.MONGO_URI)
        await Quotes.findByIdAndUpdate(filter, update, {
           new: true
         });
  
         const Quotes = await Quotes.find()
            res.json({
                message: "Quote Updated Successfully.",
                Quotes
            })
         
    } 
    catch (error) {
        res.json({
            message: error.message,
        });
    }
}

const QuoteById = async (req, res) => {
    const { _id } = req.query;

    try {
        await connect(process.env.MONGO_URI);
        const Quote = await Quotes.findById(_id);

        if (!Quote) {
            return res.status(404).json({
                message: 'Quote not found'
            });
        }

        res.json({
            Quote: Quote
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {getAllQuote , AddQuotes , QuoteById, updateQuoteById, deleteQuote}