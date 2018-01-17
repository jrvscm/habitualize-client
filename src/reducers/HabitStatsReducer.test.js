import HabitStatsReducer from './HabitStatsReducer';

import { setCurrentHabit, setPercentSuccess, setDonutData } from '../actions';


describe('HabitStatsReducer', () => {
	it('should set the initial state when nothing is passed in', () => {
		const state = HabitStatsReducer(undefined, {type: '__UNKNOWN'});

		expect(state.averageSubmit).toEqual('');
        expect(state.percentSuccess).toEqual(0);
        expect(state.longestStreak).toEqual('');
        expect(state.currentStreak).toEqual('');
        expect(state.donutDataArr).toEqual([]);
        expect(state.barDataArr).toEqual([]);
        expect(state.currentHabit).toEqual({});
        expect(state.setNewRecord).toEqual(false);
        expect(state.loading).toEqual(false);
	});

	 it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = HabitStatsReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

	 it('Should set the currentHabit', () => {
	 	let state = {
	 		averageSubmit: '',
			percentSuccess: 0,
			longestStreak: '',
			currentStreak: '',
			donutDataArr: [],
			barDataArr: [],
			currentHabit: {},
			setNewRecord: false,
			loading: false
	 	};

	 	state = HabitStatsReducer(state, setCurrentHabit({
	 		"habitTitle":"Go Over Investments",
			"startDate":"01-9-2018",
			"loggedDate":"01-15-2018",
			"streak":[
			{"submitted":"01-09-2018","impressions":2},
			{"submitted":"01-10-2018","impressions":3},
			{"submitted":"01-11-2018","impressions":1},
			{"submitted":"01-12-2018","impressions":3},
			{"submitted":"01-13-2018","impressions":5},
			{"submitted":"01-14-2018","impressions":1}
			],
			"goal":"2",
			"goodOrBad":"good",
			"userRef":"5a5cce94b0fa770014009d53",
			"logInterval":"Per Day"
		}));

	 	expect(state.currentHabit.habitTitle).toEqual("Go Over Investments");
        expect(state.currentHabit.startDate).toEqual("01-9-2018");
        expect(state.currentHabit.loggedDate).toEqual("01-15-2018");
        expect(state.currentHabit.streak).toEqual([
			{"submitted":"01-09-2018","impressions":2},
			{"submitted":"01-10-2018","impressions":3},
			{"submitted":"01-11-2018","impressions":1},
			{"submitted":"01-12-2018","impressions":3},
			{"submitted":"01-13-2018","impressions":5},
			{"submitted":"01-14-2018","impressions":1}
			]);
        expect(state.currentHabit.goal).toEqual("2");
        expect(state.currentHabit.goodOrBad).toEqual("good");
        expect(state.currentHabit.userRef).toEqual("5a5cce94b0fa770014009d53");
        expect(state.currentHabit.logInterval).toEqual("Per Day");
	 });


	 it('Should set the currentHabit', () => {
	 	let state = {
			percentSuccess: 0
	 	};
	 state = HabitStatsReducer(state, setPercentSuccess(20));
	 expect(state.percentSuccess).toEqual(20);

	 state = HabitStatsReducer(state, setPercentSuccess(15));
	 expect(state.percentSuccess).toEqual(15);

	 state = HabitStatsReducer(state, setPercentSuccess(8));
	 expect(state.percentSuccess).toEqual(8);

	 state = HabitStatsReducer(state, setPercentSuccess(10));
	 expect(state.percentSuccess).toEqual(10);
	});

	it('Should set the donut data', () => {
		let state = {
			donutDataArr: []
		}

	state = HabitStatsReducer(state, setDonutData([1,2,3]));
	expect(state.donutDataArr).toEqual([1,2,3]);

	state = HabitStatsReducer(state, setDonutData([3,4,5]));
	expect(state.donutDataArr).toEqual([3,4,5]);

	state = HabitStatsReducer(state, setDonutData([0,2,0]));
	expect(state.donutDataArr).toEqual([0,2,0]);

	state = HabitStatsReducer(state, setDonutData([1,8,7]));
	expect(state.donutDataArr).toEqual([1,8,7]);
	});
});