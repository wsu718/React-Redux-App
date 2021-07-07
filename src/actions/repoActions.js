import axios from 'axios';

export const ADD_REPO_START = 'ADD_REPO_START';
export const ADD_REPO_SUCCESS = 'ADD_REPO_SUCCESS';
export const ADD_REPO_FAILURE = 'ADD_REPO_FAILURE';

export const addRepo = input => dispatch => {
    dispatch({ type: ADD_REPO_START });
    axios
        // .get(`https://api.icndb.com/jokes/random?exclude=[explicit]`)
        .get(`https://api.github.com/repos/${input}`)
        // .get(`https://api.github.com/repos/jgthms/bulma`)
        .then(res => {
            dispatch({ type: ADD_REPO_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: ADD_REPO_FAILURE, payload: err.response })
        });
};

