const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM= 'BUY_ICECREAM';

//Action creator
function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }    
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM
    }    
}

const initialState = {
    numOfCakes: 10
}
const initialState = {
    numOfIceCream: 20
}

const cakereducer = (state = initialCakeState, action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state, //make a copy of the state object then update state with spread operator
            numOfCakes: state.numOfCakes - 1
        }
        default: return state;
    }
}


const iceCreamReducer = (state = initialIceCreamState, action)=>{
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state, //make a copy of the state object then update state with spread operator
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state;
    }
}

const store = createStore(reducer)
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(()=> console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()