// const app = require('express');
// const router = app.Router();

// const { getAllAuthors, getAuthorByID, createAuthor, updateAuthor, deleteAuthor } = require('./controller')


// router.get('/get-all-Authors', getAllAuthors)
// router.get('/get-Author-by-id', getAuthorByID)
// router.post('/create-Author', createAuthor)
// router.put('/update-Author', updateAuthor)
// router.delete('/delete-Author', deleteAuthor)

// module.exports = router;

const app = require('express');
const router = app.Router();

const {getAllAuthor,AuthorById,updateAuthorById,deleteAuthor,AddAuthors} = require('./controller')


router.post('/add-Authors', AddAuthors);
router.get('/get-all-Authors', getAllAuthor);
router.get('/get-Author-by-id', AuthorById);
router.delete('/delete-Author', deleteAuthor);
router.put('/update-Author-id', updateAuthorById); 



module.exports = router