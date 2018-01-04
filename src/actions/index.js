import { API_BASE_URL } from '../config';
import moment from 'moment';

const SET_CURRENT_HABIT = 'SET_CURRENT_HABIT'
export const setCurrentHabit = (habit) => ({
	type: 'SET_CURRENT_HABIT',
	habit
})

const SET_CURRENT_HABIT_ARRAY = 'SET_CURRENT_HABIT_ARRAY'
export const setCurrentHabitArray = (array) => ({
	type: 'SET_CURRENT_HABIT_ARRAY',
	array
})

const SEND_CURRENT_HABIT = 'SEND_CURRENT_HABIT'
export const sendCurrentHabit = (habit) => {
	return (dispatch) => {
		dispatch(setCurrentHabitArray(habit.streak));
		dispatch(setCurrentHabit(habit));
	}
}


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
		console.log(habit)
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
        		streak: [{submitted: moment(values.habitStartDate).format('MM-DD-YYYY'), impressions: 1}],
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

export const logSubmission = (currentHabit, streak) => {
	return  (dispatch) => {
		const today = moment().format('MM-DD-YYYY');
		const yesterday = moment(today).add(-1, 'days').format('MM-DD-YYYY');
		let newLog = {submitted: today, impressions: 1};
		let missedDayLog = {submitted: today, impressions: 0};

		let newArray = [];

		for(let i=0; i<streak.length; i++) {
			newArray.push(streak[i]);
		}

		const last = newArray.length -1;


		if(moment(newArray[last].submitted).isSame(today) == true) {
			newArray[last] = {submitted: today, impressions: newArray[last].impressions + 1};
				} else if(moment(newArray[last].submitted).isSame(yesterday) == true) {
					newArray.push(newLog);
					}

		dispatch(setGraphInfo(currentHabit, newArray));
	}
}

export const setGraphInfo = (currentHabit, newArray) => {
	return  (dispatch) => {

		const today = moment().format('MM-DD-YYYY');
		const yesterday = moment(today).add(-1, 'days').format('MM-DD-YYYY');
		let missedDayLog = {submitted: today, impressions: 0};
		const last = newArray.length -1;

		if(moment(newArray[last].submitted).isSame(today) == false && 
			moment(newArray[last].submitted).isSame(yesterday) == false) {
				let lastSubmit = moment(newArray[last].submitted);
				let difference = lastSubmit.diff(today, 'days');
				let datesMissedArray = [];
				for(let i=0; i>difference; i--) {
					datesMissedArray.push(moment(today).add(i, 'days').format('MM-DD-YYYY'));
				}
				
				datesMissedArray.reverse();

				for(let j=0; j<datesMissedArray.length; j++) {
					newArray.push({submitted: datesMissedArray[j], impressions: 0});
				}
			}

		let newCurrentHabit = {
			name: currentHabit.name,
			date: currentHabit.date,
			streak: newArray,
			goal: currentHabit.goal,
			goodorbad: currentHabit.goodorbad,
			id: currentHabit.id,
			userref: currentHabit.userref
		}

		dispatch(formatNewHabit(newCurrentHabit, newArray));
	}
}

export const formatNewHabit = (newCurrentHabit, newArray, streak) => {
	return (dispatch) => {
		dispatch(sendCurrentHabit(newCurrentHabit, newArray))
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
  		(n ? res[res.length-1]++ : res.push(0), res)
		, [0]);

		const longestStreak = Math.max(...streaks);

		dispatch(setLongestStreak(longestStreak));
		dispatch(setUpPercentSuccess(newArray));
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

