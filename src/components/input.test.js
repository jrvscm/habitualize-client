import React from 'react';
import {shallow, mount} from 'enzyme';
import Input from './Input';

describe('<Input />', () => {
	it('should render without crashing', () => {
		shallow(<Input />);
	});
});