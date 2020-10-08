import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './components/App';
import { StoreProvider } from './store/store';
import { configure } from 'mobx';

configure({ enforceActions: 'observed' });

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById('root')
);
