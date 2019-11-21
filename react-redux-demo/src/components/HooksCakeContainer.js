import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {buyCake} from '../redux';

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch(buyCake)
  return (
    <div>
        <h2>Num Hooked Cakes - {numOfCakes}</h2>
        <button onClick={()=>dispatch(buyCake())}>Buy Hooked Cakes</button>
    </div>
  );
}

export default HooksCakeContainer;
