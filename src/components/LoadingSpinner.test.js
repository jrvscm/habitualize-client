import React from 'react';
import {shallow, mount} from 'enzyme';
import LoadingSpinner from './LoadingSpinner';

describe('<LoadingSpinner />', () => {
	it('should render without crashing', () => {
		shallow(<LoadingSpinner />);
	});
});