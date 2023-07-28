const mongoose = require('mongoose');

const ModelSchema = mongoose.Schema(
    {
        UserId : { type : String, require : [ true, "please enter User id"] },
        CustomerName : { type : String, require : [ true, "please enter Customer Name"] },
        PharmacyId : { type : String, require : [ true, "please enter pharmacy id"] },
        MedicineId : { type : String, require : [ true, "please enter medicine id"] },
        Addres : { type : String, require : [ true, "please enter address"] },
        PaymentMethod : { type : String, require : [ true, "please enter payment method"] },
        Price : { type : Number, require : [ true, "please enter price"] },
    },
    {
        timestamps : true
    }
);

const Order = mongoose.model('Order' , ModelSchema);
module.exports = Order;