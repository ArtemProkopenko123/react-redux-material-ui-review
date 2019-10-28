import axios from 'axios';


export const ADD_TRAINING       = 'ADD_TRAINING'
export const DELETE_TRAINING    = 'DELETE_TRAINING'
export const GET_MUSCLES        = 'GET_MUSCLES'
export const GET_EXERCISES      = 'GET_EXERCISES'
export const EDIT_EXERCISES     = 'EDIT_EXERCISES'
export const GET_SELECTED       = 'GET_SELECTED'
export const SET_SELECTED       = 'SET_SELECTED'


export function getMuscles() {
    return { type: GET_MUSCLES }
}
export function getExercises() {
    return { type: GET_EXERCISES }
}
export function getSelectedExercise() {
    return { type: GET_EXERCISES }
}
export function addTraining(data) {
    return { type: ADD_TRAINING, data }
}
export function editTraining(data) {
    return { type: EDIT_EXERCISES, data }
}
export function setSelected(id) {
    return { type: SET_SELECTED, id }
}
export function removeTraining(id) {
    return { type: DELETE_TRAINING, id }
}

export function axiosCall (dispatch) {
    axios.get('http://ip.jsontest.com/?callback=showMyIP')   
    .then((res) =>{
        alert(res.data)
        console.log(res)
        //dispatch(removeTrainingTest('2'));
    })
    .catch((error)=> {
        console.log("ERROR")
       // dispatch({type: CREATE_ORGANIZATION_FAILURE, payload: error});
    })
}
 