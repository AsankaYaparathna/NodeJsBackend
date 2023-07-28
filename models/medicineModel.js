const mongoose = require('mongoose');

const ModelSchema = mongoose.Schema(
    {
        Name : { type : String, require : [ true, "please enter medicine Name"] },
        PharmayId : { type : String, require : [ true, "please enter pharmacy id"] },
        Qty : { type : Number, require : [ true, "please enter no of qty"] },
        Price : { type : Number, require : [ true, "please enter price"] },
    },
    {
        timestamps : true
    }
);

const Medicine = mongoose.model('Medicine' , ModelSchema);
module.exports = Medicine;