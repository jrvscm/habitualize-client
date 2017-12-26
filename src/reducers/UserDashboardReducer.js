const initialState = {
	habits: [{
				name: 'Floss Teeth',
				date: '12.20.2017',
				streak: [0, 2, 1, 2, 0, 1, 1, 0, 0]
			},
			{
				name: 'Learn Javascript',
				date: '12.25.2017',
				streak: [2, 1, 0, 1, 0, 0, 3, 3, 1]
			},
			{
				name: 'Practice Algorithms',
				date: '12.31.2017',
				streak: [1, 0, 1, 1, 2, 0, 0, 0, 1]
			}]	
}


const UserDashboardReducer = (state = initialState, action) => {
	switch(action.type) {

		default:
			return state
	}
} 

export default UserDashboardReducer;
