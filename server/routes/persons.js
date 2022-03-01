import express from 'express';
import { getPersons, getSinglePerson, createPerson } from '../controllers/persons.js'
const router = express.Router();

router.get(
    '/list',
    getPersons
);
router.get(
    '/:id',
    getSinglePerson
);
router.post(
    '/create',
    createPerson
)

export default router;