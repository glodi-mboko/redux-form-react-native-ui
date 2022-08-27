import {combineReducers, createStore} from 'redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  // ... the rest of your reducers
  form: formReducer
}); 

const store = createStore(rootReducer);

export default store;