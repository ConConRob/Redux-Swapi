// we'll need axios
import axios from 'axios';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const ADD_CHARACTERS = "ADD_CHARACTERS";
export const FAILURE ="FAILURE";
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const getCharactersAsync = () => dispatch => {
    axios.get('https://swapi.co/api/people/')
        .then(res => {
            dispatch({type: ADD_CHARACTERS, payload: res.data });
        })
        .catch(err => {
            dispatch({type: FAILURE, payload:err})
        })
}