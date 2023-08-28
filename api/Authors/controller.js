// const Author = require('./models');

// const authorsController = {
//   getAllAuthors: async (req, res) => {
//     try {
//       const authors = await Author.find();
//       res.json(authors);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   },

//   getAuthorById: async (req, res) => {
//     // Implement logic to get author by ID
//   },

//   createAuthor: async (req, res) => {
//     // Implement logic to create a new author
//   },

//   updateAuthor: async (req, res) => {
//     // Implement logic to update an author
//   },

//   deleteAuthor: async (req, res) => {
//     // Implement logic to delete an author
//   }
// };

// module.exports = authorsController;


// const Author = require('./model')
// const { connect } = require('mongoose')
// require('dotenv').config()

// const getAllAuthors = async (req, res) => {

//     try {
//         await connect(process.env.MONGO_URI)
//         const allAuthors = await Author.find()
//         res.json({
//             Author: allAuthors
//         })

//     }


//     catch (error) {
//         res.status(400).json({
//             message: error.message
//         })
//     }

// }


// const getAuthorByID = async (req, res) => {

//     const { _id } = req.query


//     try {
//         await connect(process.env.MONGO_URI)
//         const Author = await Author.findOne({ _id })
//         res.json({ Author })
//     }


//     catch (error) {
//         res.status(400).json({
//             message: error.message
//         })
//     }

// }

// const createAuthor = async (req, res) => {
//     const { AuthorName, AuthorImage } = req.body

//     if (!AuthorName || !AuthorImage) {
//         res.status(403).json({
//             message: "Missing Required Field"
//         })
//     }

//     else {
//         try {
//             await connect(process.env.MONGO_URI)
//             const checkExisting = await Author.exists({ AuthorName })

//             if (checkExisting) {
//                 res.status(400).json({
//                     message: "Author Already Exists"
//                 })
//             }

//             else {
//                 await Author.create({ AuthorName, AuthorImage })
//                 const allAuthors = await Author.find()

//                 res.json({
//                     message: "DB Connected",
//                     Author: allAuthors
//                 })

//             }
//         }


//         catch (error) {
//             res.status(400).json({
//                 message: error.message
//             })
//         }
//     }
// }

// const updateAuthor = async (req, res) => {
//     const { _id, AuthorName, AuthorImage } = req.body

//     const filter = { _id };
//     const update = { AuthorName, AuthorImage };

//     try {
//         await connect(process.env.MONGO_URI)

//         await Author.findOneAndUpdate(filter, update, {
//             new: true
//         });

//         const Author = await Author.find()

//         res.json({
//             message: "Success",
//             Author
//         })

//     }


//     catch (error) {
//         res.status(400).json({
//             message: error.message
//         })
//     }

// }

// const deleteAuthor = async (req, res) => {

//     const { _id } = req.body


//     try {
//         await connect(process.env.MONGO_URI)
//         await Author.deleteOne({ _id })
//         const Author = await Author.find()
//         res.status(200).json({
//             message: "Deleted Successfully",
//             Author
//         })
//     }


//     catch (error) {
//         res.status(400).json({
//             message: error.message
//         })
//     }

// }

// module.exports = { getAllAuthors, getAuthorByID, createAuthor, updateAuthor, deleteAuthor }





const Authors = require('./model')
const { connect } = require('mongoose')
require('dotenv').config()


const getAllAuthor = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)
        const Authors = await Authors.find()
        res.json(
            {
                Authors
            }
        )

    }
    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}

const AddAuthors = async (req, res) => {

    const { AuthorName, AuthorImage } = req.body;
    if(!AuthorName || ! AuthorImage )
    {
       res.status(403).json({
          message : "Missing Required Field"
       })
    }
    else 
    {
       try {
          await connect(process.env.MONGO_URI)
          const AuthorExists = await Authors.exists({  AuthorName })
         if (AuthorExists) {
             res.status(208).json({
                 message: "This Author Already Exists",
             })
         }
         else{
          await Authors.create({ AuthorName, AuthorImage })
          const allAuthors = await Authors.find()
          res.json({
             message: "Author Added Successfully",
                 Authors: allAuthors         
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

const deleteAuthor = async (req, res) => {
    try {
        const { _id } = req.body
      await connect(process.env.MONGO_URI)
      await Authors.findOneAndDelete({ _id })
      const Author = await Authors.find()
      res.status(200).json({ 
         message :"Deleted Succesfully"
         ,Author})
    } 
    catch (error) {
        res.status(400).json({
            message : error.message
        }) 
    }
}

const updateAuthorById = async (req, res) => {
    const {_id,AuthorName,AuthorImage} = req.body
    const filter = { _id};
    const update = {AuthorName,AuthorImage};
    try {
        await connect(process.env.MONGO_URI)
        await Authors.findByIdAndUpdate(filter, update, {
           new: true
         });
  
         const Authors = await Authors.find()
            res.json({
                message: "Author Updated Successfully.",
                Authors
            })
         
    } 
    catch (error) {
        res.json({
            message: error.message,
        });
    }
}

const AuthorById = async (req, res) => {
    const { _id } = req.query;

    try {
        await connect(process.env.MONGO_URI);
        const Author = await Authors.findById(_id);

        if (!Author) {
            return res.status(404).json({
                message: 'Author not found'
            });
        }

        res.json({
            Author: Author
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {getAllAuthor , AddAuthors , AuthorById, updateAuthorById, deleteAuthor}