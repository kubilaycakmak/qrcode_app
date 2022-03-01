import axios from 'axios';
const apiBaseUrl = "http://localhost:5001";
const persons = '/persons/';

export const fetchPersons =
    async () => await axios.get(apiBaseUrl + persons);

export const fetchSinglePerson =
    async (id) => await axios.get(`${apiBaseUrl + persons}${id}`);

export const createPerson =
    async (person) => await axios.post(apiBaseUrl + persons, person);
