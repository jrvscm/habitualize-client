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