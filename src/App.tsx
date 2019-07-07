import * as React from 'react';
import * as ReactDOM from 'react-dom';

import RootNavigator from './components/navigations/Root.navigation';

const App = () => {
    return (
        <RootNavigator/>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);
