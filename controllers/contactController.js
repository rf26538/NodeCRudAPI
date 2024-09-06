const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

const createContact = asyncHandler(async (req, res) => {
    console.log("this is body request:", req.body);
    const {name, age, email, phone } = req.body;

    if (!name || !age || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mendatory");
    }

    const contact = await Contact.create({
        name,
        age,
        email,
        phone,
        user_id: req.user.id
    });
    res.status(201).json(contact);
});

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Constact not found");
    }

   /** Addinon for auth update */ 
    if(contact.user.toString() !== req.user.id){
        res.status(403)
        throw new Error("User don't have permission to update other user contacts");
    }
    /** */ 

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}

    );
    res.status(200).json(updatedContact);
});

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Constact not found");
    }

    /** Addinon for auth delete */ 
    if(contact.user.toString() !== req.user.id){
        res.status(403)
        throw new Error("User don't have permission to delete other user contacts");
    }
    /** */ 

    await contact.remove();
    res.status(200).json(contact);
});

const getIndivisualContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    res.status(200).json(contact);
});

module.exports = { 
    getContacts,
    createContact,
    updateContact,
    deleteContact,
    getIndivisualContact
};