const mongoose = require('mongoose');
const userAutherSchema = new mongoose.Schema({
   
    username: {
            type : String
    },

    password: { type: String
   }

})

module.exports = mongoose.model('User',userAutherSchema);