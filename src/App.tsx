import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StoreContext } from "redux-react-hook";
import { configureStore } from './providers/configureStore';
import RootNavigator from './components/navigations/Root.navigation';

const store = configureStore();

const App = () => {
    return (
        <StoreContext.Provider value={store}>
            <RootNavigator/>
        </StoreContext.Provider>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);
