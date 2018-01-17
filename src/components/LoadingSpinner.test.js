import React from 'react';
import { shallow, mount } from 'enzyme';
import LoadingSpinner from './LoadingSpinner';

it('Renders without crashing', () => {
	shallow(<LoadingSpinner />)
});