import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import HabitStatsReducer from './reducers/HabitStatsReducer';
import UserDashboardReducer from './reducers/UserDashboardReducer';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const middleware = applyMiddleware(thunk);

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer,
        HabitStatsReducer: HabitStatsReducer,
        UserDashboardReducer: UserDashboardReducer
    }),
    compose(middleware)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;