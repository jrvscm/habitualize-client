import React from 'react';
import {shallow, mount} from 'enzyme';
import SignupForm from './SignupForm';

describe('<AuralStatus />', () => {
	it('should render without crashing', () => {
		shallow(<SignupForm />);
	});
});