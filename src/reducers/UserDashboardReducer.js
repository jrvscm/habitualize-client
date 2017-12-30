const initialState = {
	show: false,
	habits: [{
				name: 'Floss Teeth',
				date: '12.20.2017',
				streak: [
				{submitted: '12.14.2017', impressions: 1},
				{submitted: '11.1.2017', impressions: 0},
				{submitted: '10.12.2017', impressions: 1},
				{submitted: '9.31.2017', impressions: 0},
				{submitted: '8.30.2017', impressions: 7},
				{submitted: '6.21.2017', impressions: 0},
				{submitted: '8.23.2017', impressions: 4},
				{submitted: '8.22.2017', impressions: 0},
				{submitted: '9.20.2017', impressions: 3},
				{submitted: '10.21.2017', impressions: 0},
				{submitted: '2.22.2017', impressions: 2},
				{submitted: '1.23.2017', impressions: 0}
				]
			},
			{
				name: 'Learn Javascript',
				date: '12.25.2017',
				streak: [
				{submitted: '12.14.2017', impressions: 10},
				{submitted: '11.1.2017', impressions: 0},
				{submitted: '10.12.2017', impressions: 9},
				{submitted: '9.31.2017', impressions: 0},
				{submitted: '8.30.2017', impressions: 8},
				{submitted: '6.21.2017', impressions: 0},
				{submitted: '8.23.2017', impressions: 7},
				{submitted: '8.22.2017', impressions: 0},
				{submitted: '9.20.2017', impressions: 6},
				{submitted: '10.21.2017', impressions: 0},
				{submitted: '2.22.2017', impressions: 5},
				{submitted: '1.23.2017', impressions: 0}
				]
			},
			{
				name: 'Practice Algorithms',
				date: '12.1.2017',
				streak: [
				{submitted: '12.14.2017', impressions: 1},
				{submitted: '11.1.2017', impressions: 0},
				{submitted: '10.12.2017', impressions: 1},
				{submitted: '9.31.2017', impressions: 0},
				{submitted: '8.30.2017', impressions: 7},
				{submitted: '6.21.2017', impressions: 0},
				{submitted: '8.23.2017', impressions: 4},
				{submitted: '8.22.2017', impressions: 0},
				{submitted: '9.20.2017', impressions: 3},
				{submitted: '10.21.2017', impressions: 0},
				{submitted: '2.22.2017', impressions: 2},
				{submitted: '1.23.2017', impressions: 0}
				]
			}]	
}


const UserDashboardReducer = (state = initialState, action) => {
	switch(action.type) {

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

		default:
			return state
	}
} 

export default UserDashboardReducer;
