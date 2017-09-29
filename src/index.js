import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './containers/App';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    )
}

render(App);

if (module.hot) {
    module.hot.accept('./containers/App', () => { render(App)})
}




/*
ReactDOM.render(
    <App />,
    document.getElementById('app')
);


if (module.hot) {
    module.hot.accept('./containers/App', () => {
        ReactDOM.render(
                <AppContainer>
                    <App />
                </AppContainer>,
        document.getElementById('app')
        );
    });
}
*/