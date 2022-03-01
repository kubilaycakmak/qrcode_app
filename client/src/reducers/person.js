import * as types from '../actions/types';

const initState = {
    persons: [],
    selectedPerson: null
};

const personReducer =
    (state = initState, action) => {
        switch (action.type) {
            case types.FETCH_PERSONS:
                return {
                    ...state,
                    persons: action.payload,
                };
            case types.FETCH_SINGLE_PERSON:
                return {
                    ...state,
                    selectedPerson: action.payload
                };
            case types.CREATE_PERSON:
                return {
                    ...state,
                    persons: [...state.persons, action.payload],
                };
            default:
                return {
                    ...state
                };
        }
    }

export default personReducer;