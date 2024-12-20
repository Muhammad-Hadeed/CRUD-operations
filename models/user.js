const mongoose = require('mongoose');
const userAutherSchema = new mongoose.Schema({
   
    username: {
            type : String,
            required: [TransformStreamDefaultController , 'Username can not be empty'] 
    },

    password: { type: String, 
        required: [true,"Password should be filled"]

   }

})

module.exports = mongoose.model('User',userAutherSchema);