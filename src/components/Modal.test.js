import React from 'react';
import {shallow, mount} from 'enzyme';
import Modal from './Modal';

describe('<Modal />', () => {
	it('should render without crashing', () => {
		shallow(<Modal />);
	});
});