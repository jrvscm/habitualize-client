import React from 'react';
import {shallow, mount} from 'enzyme';
import NavLink from './NavLink';

describe('<NavLink />', () => {
	it('should render without crashing', () => {
		shallow(<NavLink />);
	});
});