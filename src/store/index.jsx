import { createStore , combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import loginInfo from './reducer.login'
import dashBoard from './reducer.dashboard'
import loginPage from './reducer.loginpage'

const middleware = applyMiddleware(thunk);

const reducers = combineReducers({
	loginInfo,dashBoard,loginPage
});

const store = createStore(reducers,middleware);
export default store;
