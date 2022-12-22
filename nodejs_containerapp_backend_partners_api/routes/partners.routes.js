const express = require('express');
const { getPartners, createNewPartner, getPartnerById, updatePartnerById, deletePartnerById} = require('../controllers/partners.controller');
const router = express.Router();


router.get('/partners', getPartners);
router.post('/partners', createNewPartner);
router.get('/partners/:id', getPartnerById);
router.put('/partners/:id', updatePartnerById);
router.delete('/partners/:id', deletePartnerById);

module.exports = router;