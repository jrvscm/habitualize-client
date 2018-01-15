const initialState = {
	show: false,
	loading: true,
	userHabits: []
}


const UserDashboardReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_LOADING_TRUE':
		return {
			...state,
			loading: action.loading
		}

		case 'SET_LOADING_FALSE':
		return {
			...state,
			loading: action.loading
		}

		case 'SET_MODAL_SHOW':
		return {
			...state,
			show: action.show
		}

		case 'SET_CLOSE_MODAL':
		return {
			...state,
			show: action.show
		}

		case 'ASSIGN_USER_HABITS':
		return {
			...state,
			userHabits: [...state.userHabits, action.habit]
		}

		case 'CLEAR_USER_HABITS':
		return {
			...state,
			userHabits: []
		}

		default:
			return state
	}
} 

export default UserDashboardReducer;
