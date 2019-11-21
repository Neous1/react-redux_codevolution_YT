import React from 'react';
import {connect} from 'react-redux';
import {buyCandy} from '../redux';

 function CandyContainer(props) {
  return (
    <div>
        <h2>Number of Candy - {props.numOfCandy}</h2>
        <button onClick={props.buyCandy}>Buy Candy</button>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        numOfCandy: state.candy.numOfCandy
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyCandy: () => dispatch(buyCandy())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandyContainer)