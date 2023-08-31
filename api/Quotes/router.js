const app = require("express");
const router = app.Router();

const {
  getAllQuote,
  QuoteById,
  updateQuoteById,
  deleteQuote,
  AddQuotes,
} = require("./controller");

router.post("/add-Quotes", AddQuotes);
router.get("/get-all-Quotes", getAllQuote);
router.get("/get-Quote-by-id", QuoteById);
router.delete("/delete-Quote", deleteQuote);
router.put("/update-Quote-id", updateQuoteById);

module.exports = router;