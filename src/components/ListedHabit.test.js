import React from 'react';
import { shallow, mount } from 'enzyme';
import ListedHabit from './ListedHabit';

it('Renders without crashing', () => {
	shallow(<ListedHabit />)
});