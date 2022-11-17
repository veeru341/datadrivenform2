import ReactDOM from 'react-dom';
import App from './App';
import Login from "./Pages/Login"
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';

const rootNode = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , rootNode);