import {combineReducers} from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './IceCream/IceCreamReducer';
import candyReducer from './Candy/candyReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    candy: candyReducer
})

export default rootReducer;