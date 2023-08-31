// const { Schema, model }  = require('mongoose');

// const AuthorSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   // Other author properties
// });

// const Author = model('author', AuthorSchema);

// module.exports = Author;

// const { Schema, model } = require('mongoose')

// const AuthorSchema = new Schema(
//     {
//         AuthorName: {
//             type: String,
//             unique: true,
//             required: true
//         },
//         AuthorImage: {
//             type: String,
//             required: true
//         }
//     }
// )

// const Author = model('author', AuthorSchema)
// module.exports = Author



const { Schema, model } = require('mongoose')

const AuthorsSchema = new Schema({

    AuthorName : {
        type: String,
        required: true,
    },
    AuthorImage: {
        type: String,
        required: true
    },
    AuthorDescription: {
        type: String,
        required: true,
    },

    
})
const  Authors = model('Authors', AuthorsSchema)
module.exports =  Authors 