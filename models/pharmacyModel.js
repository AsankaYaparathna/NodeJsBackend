const mongoose = require('mongoose');

const pharmacySchema = mongoose.Schema(
    {
        phName : { type : String, require : [ true, "please enter phamacy name"] },
        phOwnerName : { type : String, require : [ true, "please enter owner Name"] },
        phLocation : { type : String, require : [ true, "please enter phamacy location"] },
        phEmail : { type : String, require : [ true, "please enter email address"] },
        phPassword : { type : String, require : [ true, "please enter password"] },
    },
    {
        timestamps : true
    }
);

const Pharmacy = mongoose.model('Pharmacy' , pharmacySchema);
module.exports = Pharmacy;