import { combineReducers } from 'redux';
import UserDashboardReducer from './UserDashboardReducer';
import HabitStatsReducer from './HabitStatsReducer';

const rootReducer = combineReducers({
	UserDashboardReducer,
	HabitStatsReducer
})

export default rootReducer