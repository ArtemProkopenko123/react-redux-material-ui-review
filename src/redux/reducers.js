
import {
    ADD_TRAINING,
    DELETE_TRAINING,
    GET_MUSCLES,
    GET_EXERCISES,
    GET_SELECTED,
    SET_SELECTED,
    EDIT_EXERCISES
} from './actions'
import { exercises, muscles } from './db'

const INITIAL_STATE = {
    exercises, 
    muscles,
    selectedExercise: {}
}

export default function reducer( state = INITIAL_STATE, action) {
    switch (action.type) {

        case GET_EXERCISES :
            console.log("GET_EXERCISES ")
            return {
                exercises: state.exercises
            }

        case GET_MUSCLES :
            console.log("GET_MUSCLES ")
            return {
                muscles: state.muscles
            }
        
        case GET_SELECTED:
            console.log("GET_SELECTED ");
            
            return state.exercises.filter(el => el.id === action.id);
                
        case ADD_TRAINING:
            console.log("ADD_TRAINING ");
            return { 
                ...state,
                exercises: [...state.exercises, action.data]
            }
        case EDIT_EXERCISES:
            console.log("EDIT_EXERCISES ");
            return {
                ...state,
                exercises: state.exercises.map(el => el.id === action.data.id ?
                    { ...el, title: action.data.title,description: action.data.description,muscles: action.data.muscles } :  
                    el
                ) 
            };

        case SET_SELECTED:
            console.log("SET_SELECTED ");
            return {...state, selectedExercise: {...state.exercises.filter(el => el.id === action.id)}}


        case DELETE_TRAINING:
            console.log("DELETE_TRAINING ");
            return { 
                ...state,
                exercises: state.exercises.filter(el=> el.id !== action.id),
                selectedExercise: state.selectedExercise.id === action.id || ''
            }
        
        default:
            console.log("DEFAULT")
            return state

    }
}
