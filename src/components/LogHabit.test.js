import React from 'react';
import {shallow, mount} from 'enzyme';
import LogHabit from './LogHabit';

describe('<LogHabit />', () => {
	it('should render without crashing', () => {
		shallow(<LogHabit />);
	});
});