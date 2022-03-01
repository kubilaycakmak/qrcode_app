import Person from '../models/person'

export const getPersons = async (req, res) => {
    try {
        const persons = await Person.find();
        res.status
    } catch (error) {
        
    }
}