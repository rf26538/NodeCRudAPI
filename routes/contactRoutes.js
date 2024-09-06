const express = require("express");
const router = express.Router();
const {
    getContacts,
    createContact,
    updateContact,
    deleteContact,
    getIndivisualContact
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

/**
 * For Same route we can do this also
 * router.route('/').get(getContacts).post(createContact);
 * router.route('/:id').put(updateContact).delete(deleteContact).get(getIndivisualContact);
 * this is also the way and it will save some time also
 */
router.use(validateToken);

router.route('/').get(getContacts);
router.route('/').post(createContact);

router.route('/:id').put(updateContact);
router.route('/:id').delete(deleteContact);
router.route('/:id').get(getIndivisualContact);

module.exports = router;