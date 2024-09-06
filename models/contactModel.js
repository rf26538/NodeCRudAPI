const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    {
        user_id :{
            type:mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        name: {
            type: String,
            required : [true, "Please add contact full name"],

        },
        age: {
            type: String,
            required : [true, "Please add contact age"],

        },
        email: {
            type: String,
            required : [true, "Please add contact email address"],

        },
        phone: {
            type: String,
            required : [true, "Please add contact phone number"],

        }
    },
    {
        timestamps : true
    }
)

module.exports = mongoose.model("Contact", contactSchema);