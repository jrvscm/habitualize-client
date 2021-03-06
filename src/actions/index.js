import { API_BASE_URL } from '../config';
import { saveCurrentHabit } from '../local-storage';
import moment from 'moment';

const SET_CURRENT_HABIT = 'SET_CURRENT_HABIT'
export const setCurrentHabit = (habit) => ({
	type: SET_CURRENT_HABIT,
	habit
})

const SET_PERCENT_SUCCESS = 'SET_PERCENT_SUCCESS'
export const setPercentSuccess = (percentSuccess) => ({
	type: SET_PERCENT_SUCCESS,
	percentSuccess
})

const SET_AVERAGE_SUBMIT = 'SET_AVERAGE_SUBMIT'
export const setAverageSubmit = (averageSubmit) => ({
	type: SET_AVERAGE_SUBMIT,
	averageSubmit
})

const SET_DONUT_DATA = 'SET_DONUT_DATA'
export const setDonutData = (donutDataArr) => ({
	type: SET_DONUT_DATA,
	donutDataArr
})

const SET_LONGEST_STREAK = 'SET_LONGEST_STREAK'
export const setLongestStreak = (longestStreak) => ({
	type: SET_LONGEST_STREAK,
	longestStreak
})

const SET_CURRENT_STREAK = 'SET_CURRENT_STREAK'
export const setCurrentStreak = (currentStreak) => ({
	type: SET_CURRENT_STREAK,
	currentStreak
})

const SET_NEW_RECORD = 'SET_NEW_RECORD'
export const setNewRecord = () => ({
	type: SET_NEW_RECORD,
	setNewRecord: true
})

const SET_RECORD_TO_FALSE = 'SET_RECORD_TO_FALSE'
export const setRecordToFalse = () => ({
	type: SET_RECORD_TO_FALSE,
	setNewRecord: false
})

const SET_BAR_CHART_DATA = 'SET_BAR_CHART_DATA'
export const setBarChartData = (barDataArr) => ({
	type: SET_BAR_CHART_DATA,
	barDataArr
})

const SET_MODAL_SHOW = 'SET_MODAL_SHOW'
export const setModalShow = () => ({
	type: SET_MODAL_SHOW,
	show: true
})

const SET_CLOSE_MODAL = 'SET_CLOSE_MODAL'
export const setCloseModal = () => ({
	type: SET_CLOSE_MODAL,
	show: false
})

const CLEAR_USER_HABITS = 'CLEAR_USER_HABITS'
export const clearUserHabits = () => ({
	type: CLEAR_USER_HABITS
})

const ASSIGN_USER_HABITS = 'ASSIGN_USER_HABITS'
export const assignUserHabits = (habit) => ({
	type: ASSIGN_USER_HABITS,
	habit
})

const SET_LOADING_FALSE = 'SET_LOADING_FALSE'
export const setLoadingFalse = () => ({
	type: SET_LOADING_FALSE,
	loading: false
})

const SET_LOADING_TRUE = 'SET_LOADING_TRUE'
export const setLoadingTrue = () => ({
	type: SET_LOADING_TRUE,
	loading: true
})


export const deleteHabitRequest = (habit, authToken, currentUser) => (dispatch) => {
	dispatch(setLoadingTrue())
		return fetch(`${API_BASE_URL}/habits/delete/${habit.id}`, {
			method: 'DELETE',
			headers: {
          	//provide the authToken from our store
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json"
        	}
		})
		.then(response => dispatch(getUserHabitsRequest(currentUser, authToken)))
		.catch((ex) => console.log('parsing failed', ex))
}


const formatUserHabit = (habit) => {
	return (dispatch) => {
		let newHabit = {
			name: habit.habitTitle,
			startdate: habit.startDate,
			streak: habit.streak,
			goodorbad: habit.goodOrBad,
			goal: habit.goal,
			loginterval: habit.logInterval,
			id: habit._id,
			userref: habit.userRef
		}

		dispatch(assignUserHabits(newHabit));
	}
}

export const getCurrentHabit = (id, authToken) => (dispatch) => {
	return fetch(`${API_BASE_URL}/habits/current/${id}`, {
			method: 'GET',
			headers: {
          	//provide the authToken from our store
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json"
        	}
		})
		.then(response => response.json())
		.then(json => json.map(habit => dispatch(setCurrentHabit(habit))))
		.catch((ex) => console.log('parsing failed', ex))
}

export const getUserHabitsSuccess = (habit) => (dispatch) => {
	return dispatch(formatUserHabit(habit))
}

export const getUserHabitsRequest = (currentUser, authToken) => (dispatch) => {
	dispatch(clearUserHabits());
		return fetch(`${API_BASE_URL}/habits/${currentUser.userId}`, {
			method: 'GET',
			headers: {
          	//provide the authToken from our store
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json"
        	}
		})
		.then(response => response.json())
		.then(json => json.map(habit => dispatch(getUserHabitsSuccess(habit))))
		.catch((ex) => console.log('parsing failed', ex))
	}




export const createNewHabitRequest = (values, authToken, currentUser) => (dispatch) => {
		return fetch(`${API_BASE_URL}/habits/`, {
			method: 'POST',
			headers: {
          	//provide the authToken from our store
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json"
        	},
        	body: JSON.stringify({
        		habitTitle: values.habitTitle,
        		streak: [{submitted: moment(values.habitStartDate, 'MM/DD/YYYY').format('L'), impressions: 1}],
        		userRef: currentUser.userId,
        		goodOrBad: values.goodOrBadRadio,
        		goal: values.habitGoalDropdown,
        		logInterval: values.habitLogDropdown,
        		startDate: moment(values.habitStartDate, 'MM/DD/YYYY').format('L')
        	})
		})
		.then(response => response.json())
		.then(json => dispatch(formatUserHabit(json)))
		.catch((ex) => console.log('parsing failed', ex)) 
}

export const updateHabitStreak = (currentHabit, newArray, authToken) => (dispatch) => {
		return fetch(`${API_BASE_URL}/habits/${currentHabit.id}`, {
			method: 'PUT',
			headers: {
          	//provide the authToken from our store
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json"
        	},
        	body: JSON.stringify({
        		streak: newArray
        	})
		})
		.then(response => response.json())
		.then(json => dispatch(formatUserHabit(json)))
		.catch((ex) => console.log('parsing failed', ex)) 
}

export const logSubmission = (currentHabit, authToken) => {
	return  (dispatch) => {
		
		let today = moment().format('L');
		const yesterday = moment(today, 'MM/DD/YYYY').add(-1, 'days');
		let streak = currentHabit.streak;

		let newArray = [];

		for(let i=0; i<streak.length; i++) {
			newArray.push(streak[i]);
		}
		let last = newArray.length -1;

		if(moment(newArray[last].submitted, 'MM/DD/YYYY').isSame(today, 'day') === true) {
			newArray[last] = {submitted: moment(today, 'MM/DD/YYYY').format('L'), impressions: newArray[last].impressions + 1};
				} else if(moment(newArray[last].submitted, 'MM/DD/YYYY').isSame(yesterday, 'day') === true) {
					newArray.push({submitted: moment(today, 'MM/DD/YYYY').format('L'), impressions: 1});
					}

		dispatch(setGraphInfo(currentHabit, newArray));
		dispatch(updateHabitStreak(currentHabit, newArray, authToken));
	}
}

export const setGraphInfo = (currentHabit, newArray) => {
	return  (dispatch) => {
		//in case we lose the current habit because of a page refresh.
		if(newArray === undefined || currentHabit === undefined) {
			const retrieveHabit = localStorage.getItem('currentHabit', currentHabit);
			currentHabit = JSON.parse(retrieveHabit);
			newArray = currentHabit.streak;
		} 

		let today = moment([]).format('L');
		const yesterday = moment(today, 'MM/DD/YYYY').add(-1, 'days');

		let last = newArray.length -1;

		if(moment(newArray[last].submitted, 'MM/DD/YYYY').isSame(today, 'day') === false && 
			moment(newArray[last].submitted, 'MM/DD/YYYY').isSame(yesterday, 'day') === false) {
				let lastSubmit = moment(newArray[last].submitted, 'MM/DD/YYYY').format('L');
				let difference = moment(lastSubmit, 'MM/DD/YYYY').diff(today, 'days');
				let datesMissedArray = [];
				let missedDate;
				for(let i=0; i>difference; i--) {
					if(i < 0) {
						missedDate = moment(today, 'MM/DD/YYYY').add(i, 'days');
						datesMissedArray.push(missedDate);
					}
				}

				datesMissedArray.reverse();

				for(let j=0; j<datesMissedArray.length; j++) {
					newArray.push({submitted: moment(datesMissedArray[j]._d).format('L'), impressions: 0});
				}
			}

		let newCurrentHabit = {
			name: currentHabit.name,
			startdate: currentHabit.startdate,
			streak: newArray,
			goal: currentHabit.goal,
			goodorbad: currentHabit.goodorbad,
			id: currentHabit.id,
			userref: currentHabit.userref,
			loginterval: currentHabit.loginterval
		}
		dispatch(setCurrentHabit(newCurrentHabit))
		saveCurrentHabit(newCurrentHabit)
		const token = localStorage.getItem('authToken');
		dispatch(formatNewHabit(newCurrentHabit, newArray, token));
	}
}

export const formatNewHabit = (newCurrentHabit, newArray) => {
	return (dispatch) => {
		/* setting new barchart data */
		const newBarDataArray = [];
			newArray.map((streakIteration, index) =>
				newBarDataArray.push({name: streakIteration.submitted, Submission: streakIteration.impressions})
			);
		dispatch(setBarChartData(newBarDataArray))
		dispatch(setupDonutData(newArray))
	}
}
		
export const setupDonutData = (newArray) => {
	return (dispatch) => {
		/*setting new donutChartData*/
		const newDonutDataArr = [];
		//eslint-disable-next-line
		newArray.map((recording, index) => {
			if(recording.impressions > 0) {
				newDonutDataArr.push({
							value: recording.impressions,
							key: recording.impressions,
					})
				}
			}				
		);
		dispatch(setDonutData(newDonutDataArr))
		dispatch(setUpStreakChecker(newArray))
	}
}

export const setUpStreakChecker = (newArray) => {
	return (dispatch) => {
		/*setting the best streak */
		const streakCheckArr = [];
		newArray.map((streakIteration, index) =>
			streakCheckArr.push(streakIteration.impressions)
		);

		let streaks = streakCheckArr.reduce((res, n) => 
		//eslint-disable-next-line 
  		(n ? res[res.length-1]++ : res.push(0), res), [0]);

		const longestStreak = Math.max(...streaks);
		const currentStreak = streaks[streaks.length -1];

		if(currentStreak % 10 === 0) {
			dispatch(setNewRecord())
		}

		dispatch(setLongestStreak(longestStreak))
		dispatch(setCurrentStreak(currentStreak))
		dispatch(setUpPercentSuccess(newArray))
	}
}

export const setUpPercentSuccess = (newArray) => {
	return (dispatch) => {
		/*setting percent success */
		const impressionsArrTotal=[];
		const posDigitsArr=[];

		newArray.map((recording, index) =>
			impressionsArrTotal.push(recording.impressions)
		);

		for(let i=0; i<impressionsArrTotal.length; i++) {
			if(impressionsArrTotal[i] > 0) {
				posDigitsArr.push(impressionsArrTotal[i])
			}
		}

		let percentSuccess =   posDigitsArr.length / impressionsArrTotal.length;
			percentSuccess = (percentSuccess * 100).toFixed(2);
			percentSuccess = Number(percentSuccess);
				dispatch(setPercentSuccess(percentSuccess));
				dispatch(setUpAveSubmit(impressionsArrTotal));
	}
}

export const setUpAveSubmit = (impressionsArrTotal) => {
	return (dispatch) => {
		const sumTotalImpressionsArr = impressionsArrTotal.reduce(function(a , b) {
			return a + b;
		}, 0);

		let averageSubmit = sumTotalImpressionsArr / impressionsArrTotal.length;
			averageSubmit = Number(averageSubmit);
				dispatch(setAverageSubmit(averageSubmit.toFixed(2)))
	}
}

