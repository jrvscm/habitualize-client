import React from 'react';
import {shallow, mount} from 'enzyme';
import BestStreak from './BestStreak';

describe('<AuralStatus />', () => {
	it('should render without crashing', () => {
		shallow(<BestStreak />);
	});
});