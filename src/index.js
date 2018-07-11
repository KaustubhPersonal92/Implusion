import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
/*import './assets/css/bootstrap.min.css';*/
import './assets/css/slick.css';
import './assets/css/slick-theme.css';
import './assets/css/nouislider.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/style.css';
import '../node_modules/toastr/build/toastr.min.css';
import './assets/css/main.css';
import './assets/css/util.css';
const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
