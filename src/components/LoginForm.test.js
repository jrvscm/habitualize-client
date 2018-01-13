import React from 'react';
import {shallow, mount} from 'enzyme';
import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
	it('should render without crashing', () => {
		shallow(<LoginForm />);
	});
});