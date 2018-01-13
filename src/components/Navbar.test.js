import React from 'react';
import {shallow, mount} from 'enzyme';
import Navbar from './Navbar';

describe('<Navbar />', () => {
	it('should render without crashing', () => {
		shallow(<Navbar />);
	});
});