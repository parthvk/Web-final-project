import { createStore } from 'redux';
import reducer from '../reducers';

// Creating store
const store = createStore(reducer);

export default store;