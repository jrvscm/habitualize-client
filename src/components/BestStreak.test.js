import React from 'react';
import { shallow, mount } from 'enzyme';
import BestStreak from './BestStreak';

it('Renders without crashing', () => {
	shallow(<BestStreak />)
});