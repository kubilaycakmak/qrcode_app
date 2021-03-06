import express from 'express';
import { getPersons, getSinglePerson, createPerson } from '../controllers/persons.js'
const router = express.Router();

router.get(
    '/',
    getPersons
);
router.get(
    '/:id',
    getSinglePerson
);
router.post(
    '/',
    createPerson
)

export default router;