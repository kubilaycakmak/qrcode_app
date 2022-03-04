import axios from 'axios';
const apiBaseUrl = "https://qrcode-cicc-backend.herokuapp.com";
const persons = '/persons/';

export const fetchPersons =
    async () => await axios.get(apiBaseUrl + persons);

export const fetchSinglePerson =
    async (id) => await axios.get(`${apiBaseUrl + persons}${id}`);

export const createPerson =
    async (person) => await axios.post(apiBaseUrl + persons, person);

