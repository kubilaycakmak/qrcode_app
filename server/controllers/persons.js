import Person from '../models/person.js'

export const getPersons = async (req, res) => {
    try {
        const persons = await Person.find();
        res.status(200).json(persons);
    } catch (error) {
        res.status(404).json({
            createdAt:{
                type:Date,
                default: new Date()
            },
            message: error.message
        })
    }
}

export const getSinglePerson = async (req, res) => {
    try {
        const { id: _id } = req.params;
        const persons = await Person.findById(_id);
        res.status(200).json(persons);
    } catch (error) {
        res.status(404).json({
            createdAt:{
                type:Date,
                default: new Date()
            },
            message: error.message
        })
    }
}

export const createPerson = async (req, res) => {
    const person = req.body;
    const newPerson = new Person(person);
    try {
        await newPerson.save();
        res.status(201).json(newPerson);
    } catch (error) {
        res.status(409).json({
            createdAt:{
                type:Date,
                default: new Date()
            },
            message: error.message
        })
    }
}
