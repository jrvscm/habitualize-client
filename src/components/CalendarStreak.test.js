import React from 'react';
import {shallow, mount} from 'enzyme';
import CalendarStreak from './CalendarStreak';

describe('<CalendarStreak />', () => {
		let habit = {
			name: "floss teeth",
			startdate: "1-01-2010",
			streak: [
			{submitted: "10-10-1010", impressions: 2},
			{submitted: "10-10-1010", impressions: 2},
			{submitted: "10-10-1010", impressions: 2},
			{submitted: "10-10-1010", impressions: 2}
			],
			goal: 1,
			goodorbad: "good",
			id: "7feb24af-fc38-44de-bc38-04defc3804de",
			userref: "7feb24af-fc45-22de-bc21-43defc8765de",
			loginterval: "Per Week"

	}

	it('should render without crashing', () => {
		shallow(
			<CalendarStreak 
			currentHabit={habit}
		
			 />);
	});
});