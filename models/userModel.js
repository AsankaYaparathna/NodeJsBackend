const mongoose = require('mongoose');

const ModelSchema = mongoose.Schema(
    {
        Email : { type : String, require : [ true, "please enter email address"] },
        Password : { type : String, require : [ true, "please enter password"] },
    },
    {
        timestamps : true
    }
);

const User = mongoose.model('User' , ModelSchema);
module.exports = User;