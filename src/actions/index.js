import { API_BASE_URL } from '../config';
import moment from 'moment';

const SET_CURRENT_HABIT = 'SET_CURRENT_HABIT'
export const setCurrentHabit = (habit) => ({
	type: 'SET_CURRENT_HABIT',
	habit
})

const SET_PERCENT_SUCCESS = 'SET_PERCENT_SUCCESS'
export const setPercentSuccess = (percentSuccess) => ({
	type: 'SET_PERCENT_SUCCESS',
	percentSuccess
})

const SET_AVERAGE_SUBMIT = 'SET_AVERAGE_SUBMIT'
export const setAverageSubmit = (averageSubmit) => ({
	type: 'SET_AVERAGE_SUBMIT',
	averageSubmit
})

const SET_DONUT_DATA = 'SET_DONUT_DATA'
export const setDonutData = (donutDataArr) => ({
	type: 'SET_DONUT_DATA',
	donutDataArr
})

const SET_LONGEST_STREAK = 'SET_LONGEST_STREAK'
export const setLongestStreak = (longestStreak) => ({
	type: 'SET_LONGEST_STREAK',
	longestStreak
})

const SET_BAR_CHART_DATA = 'SET_BAR_CHART_DATA'
export const setBarChartData = (barDataArr) => ({
	type: 'SET_BAR_CHART_DATA',
	barDataArr
})

const SET_MODAL_SHOW = 'SET_MODAL_SHOW'
export const setModalShow = () => ({
	type: 'SET_MODAL_SHOW',
	show: true
})

const SET_CLOSE_MODAL = 'SET_CLOSE_MODAL'
export const setCloseModal = () => ({
	type: 'SET_CLOSE_MODAL',
	show: false
})

const CLEAR_USER_HABITS = 'CLEAR_USER_HABITS'
export const clearUserHabits = () => ({
	type: 'CLEAR_USER_HABITS'
})

const ASSIGN_USER_HABITS = 'ASSIGN_USER_HABITS'
export const assignUserHabits = (habit) => ({
	type: 'ASSIGN_USER_HABITS',
	habit
})


const formatUserHabit = (habit) => {
	return (dispatch) => {
		let newHabit = {
			name: habit.habitTitle,
			date: habit.startDate,
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

export const getUserHabits = (currentUser, authToken) => (dispatch) => {
		return fetch(`${API_BASE_URL}/habits/${currentUser.userId}`, {
			headers: {
          	//provide the authToken from our store
            Authorization: `Bearer ${authToken}`
        	}
		})
		.then(response => response.json())
		.then(json => json.map(habit => dispatch(formatUserHabit(habit))))
		.catch((ex) => console.log('parsing failed', ex))
	}




export const createNewHabitRequest = (values, authToken, currentUser) => (dispatch) => {
		const firstLog = moment().format('MM-DD-YYYY');
		return fetch(`${API_BASE_URL}/habits/`, {
			method: 'POST',
			headers: {
          	//provide the authToken from our store
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json"
        	},
        	body: JSON.stringify({
        		habitTitle: values.habitTitle,
        		streak: [{submitted: firstLog, impressions: 1}],
        		userRef: currentUser.userId,
        		goodOrBad: values.goodOrBadRadio,
        		goal: values.habitGoalDropdown,
        		logInterval: values.habitLogDropdown
        	})
		})
		.then(response => response.json())
		.then(json => dispatch(formatUserHabit(json)))
		.catch((ex) => console.log('parsing failed', ex)) 
}

export const sameDayLogged = (newLog, authToken, currentHabit) => (dispatch) => {
	console.log(authToken)
			return fetch(`${API_BASE_URL}/habits/${currentHabit.id}`, {
			method: 'PUT',
			headers: {
          	//provide the authToken from our store
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json"
        	},
        	body: JSON.stringify({
        		streak: newLog
        	})
		})
		.then(response => response.json())
		.then(json => dispatch(formatUserHabit(json)))
		.catch((ex) => console.log('parsing failed', ex)) 
}