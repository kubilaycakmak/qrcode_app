import * as api from '../api/index';
import * as types from './types';

export const fetchPersons = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPersons();
        dispatch({
            type: types.FETCH_PERSONS,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
};

export const createPerson = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPerson(post);
        dispatch({
            type: types.CREATE_PERSON,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
};

export const fetchSinglePerson = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchSinglePerson(id);
        dispatch({
            type: types.FETCH_SINGLE_PERSON,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

// export default fetchPosts;