const asyncHandler = require("express-async-handler");
const getContacts = (req, res) => {
    res.status(200).json({message :"Get All contact"});
};

const createContact = asyncHandler((req, res) => {
    const {name, age, email, phone } = req.body;

    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mendatory");
    }
    res.status(200).json({message :"create contact"});
});

const updateContact = asyncHandler((req, res) => {
    res.status(200).json({message :`update contact for ${req.params.id}`});
});

const deleteContact = asyncHandler((req, res) => {
    res.status(200).json({message :`Delete contact for ${req.params.id}`});
});

const getIndivisualContact = asyncHandler((req, res) => {
    res.status(200).json({message :`Indivisual contact for ${req.params.id}`});
});


module.exports = { 
    getContacts,
    createContact,
    updateContact,
    deleteContact,
    getIndivisualContact
};