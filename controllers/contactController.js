const getContacts = (req, res) => {
    res.status(200).json({message :"Get All contact"});
};

const createContact = (req, res) => {
    const {name, age, email, phone } = req.body;

    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mendatory");
    }
    res.status(200).json({message :"create contact"});
};

const updateContact =(req, res) => {
    res.status(200).json({message :`update contact for ${req.params.id}`});
};

const deleteContact = (req, res) => {
    res.status(200).json({message :`Delete contact for ${req.params.id}`});
};

const getIndivisualContact = (req, res) => {
    res.status(200).json({message :`Indivisual contact for ${req.params.id}`});
};


module.exports = { 
    getContacts,
    createContact,
    updateContact,
    deleteContact,
    getIndivisualContact
};