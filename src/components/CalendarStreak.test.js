import React from 'react';
import { shallow, mount } from 'enzyme';
import CalendarStreak from './BarGraph';

it('Renders without crashing', () => {
	shallow(<CalendarStreak />)
});