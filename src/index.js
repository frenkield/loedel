import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

ReactDOM.render(<AppContainer><App/></AppContainer>, document.getElementById('root'));

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App)
    })
}
