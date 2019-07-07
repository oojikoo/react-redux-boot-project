import React from 'react';
import { Link } from 'react-router-dom';
import { useMappedState } from "redux-react-hook";
import { actions } from "../actions";
import { ReduxState } from "../types/ReduxState";
import { useMappedActions } from "../utils/useMappedActions";

const mapState = (state: ReduxState) => ({
    number: state.count.number
});

const mapActions = {
    increment: actions.increment,
    decrement: actions.decrement,
    fetchBigAmount: actions.fetchBigAmount
};

const Home = () => {
    const { number } = useMappedState(mapState);
    const { increment, decrement, fetchBigAmount } = useMappedActions(mapActions);
    return (
        <div>
            <h1>Thi is Home</h1>
            <div>
                <Link to="/temp"><a>To Temp</a></Link>
            </div>
            <h1>{number}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={() => {
                fetchBigAmount();
            }}>+ ?</button>
        </div>
    );
};

export default Home;
