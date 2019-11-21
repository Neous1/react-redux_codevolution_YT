import {BUY_CANDY} from './candyTypes';

const initialState ={
    numOfCandy: 150
}

const candyReducer=(state=initialState, action) =>{
    switch(action.type){
        case BUY_CANDY: return {
            ...state,
            numOfCandy: state.numOfCandy - 5
        }
        default: return state
    }
}

export default candyReducer;