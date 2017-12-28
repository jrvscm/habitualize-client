const initialState = {
	averageSubmit: '',
	percentSuccess: 0,
	longestStreak: '',
	donutDataArr: [],
	barDataArr: [],
	currentHabit: {
				name: 'Learn Javascript',
				date: '12.25.2017',
				streak: [
				{submitted: '12.14.2017', impressions: 1},
				{submitted: '11.1.2017', impressions: 2},
				{submitted: '10.12.2017', impressions: 3},
				{submitted: '9.31.2017', impressions: 4},
				{submitted: '8.30.2017', impressions: 5},
				{submitted: '6.21.2017', impressions: 6},
				{submitted: '8.23.2017', impressions: 12},
				{submitted: '8.22.2017', impressions: 7},
				{submitted: '9.20.2017', impressions: 8},
				{submitted: '10.21.2017', impressions: 9},
				{submitted: '2.22.2017', impressions: 0},
				{submitted: '1.23.2017', impressions: 11}
				]
	}
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
