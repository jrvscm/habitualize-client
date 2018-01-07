
const initialState = {
	averageSubmit: '',
	percentSuccess: 0,
	longestStreak: '',
	currentStreak: '',
	donutDataArr: [],
	barDataArr: [],
	currentHabit: {},
	setNewRecord: false,
	loading: false
}


const HabitStatsReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_CURRENT_HABIT':
		return {
			...state,
			currentHabit: action.habit
		}

		case 'SET_PERCENT_SUCCESS':
		return {
			...state,
			percentSuccess: action.percentSuccess
		}

		case 'SET_AVERAGE_SUBMIT':
		return {
			...state,
			averageSubmit: action.averageSubmit
		}
		
		case 'SET_DONUT_DATA':
		return {
			...state,
			donutDataArr: action.donutDataArr
		}

		case 'SET_LONGEST_STREAK':
		return {
			...state,
			longestStreak: action.longestStreak
		}

		case 'SET_NEW_RECORD':
		return {
			...state,
			setNewRecord: action.setNewRecord
		}

		case 'SET_RECORD_TO_FALSE':
		return {
			...state,
			setNewRecord: action.setNewRecord
		}

		case 'SET_CURRENT_STREAK':
		return {
			...state,
			currentStreak: action.currentStreak
		}

		case 'SET_BAR_CHART_DATA':
		return {
			...state,
			barDataArr: action.barDataArr
		}

		default:
			return state
	}
} 

export default HabitStatsReducer;
