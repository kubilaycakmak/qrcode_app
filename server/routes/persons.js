import express from 'express';
import { getPersons } from '../controllers/persons'
const router = express.Router();

router.get(
    '/list',
    getPersons
);

export default router;