import React from 'react';
import { shallow, mount } from 'enzyme';
import NavLink from './NavLink';

it('Renders without crashing', () => {
	shallow(<NavLink />)
});