import React from 'react';
import { shallow, mount } from 'enzyme';
import HabitForm from './HabitForm';

it('Renders without crashing', () => {
	shallow(<HabitForm />)
});