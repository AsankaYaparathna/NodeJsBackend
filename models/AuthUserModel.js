const mongoose = require('mongoose');

const ModelSchema = mongoose.Schema(
    {
        UserName : { type : String, require : [ true, "please enter email address"] },
        Password : { type : String, require : [ true, "please enter password"] },
        Secret : { type : String, require : [ false]},
    },
    {
        timestamps : true
    }
);

const User = mongoose.model('AuthUser' , ModelSchema);
module.exports = User;