import React from 'react';
import {shallow, mount} from 'enzyme';
import HabitForm from './HabitForm';

describe('<HabitForm />', () => {
	it('should render without crashing', () => {
		shallow(<HabitForm />);
	});
});