const initialState = {
	currentHabit: {
				name: 'Learn Javascript',
				date: '12.25.2017',
				streak: [1, 1, 1, 1, 0, 1, 0, 0, 1,1, 1, 1, 1, 0, 1, 0, 0, 1,1, 1, 1, 1, 0, 1, 0, 0, 1]
	}
}


const HabitStatsReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_CURRENT_HABIT':
		return {
			...state,
			currentHabit: action.habit
		}

		default:
			return state
	}
} 

export default HabitStatsReducer;
