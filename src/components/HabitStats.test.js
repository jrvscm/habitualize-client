import React from 'react';
import {shallow, mount} from 'enzyme';
import HabitStats from './HabitStats';

describe('<HabitStats />', () => {
	it('should render without crashing', () => {
		shallow(<HabitStats />);
	});
});