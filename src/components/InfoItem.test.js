import React from 'react';
import {shallow, mount} from 'enzyme';
import InfoItem from './InfoItem';

describe('<InfoItem />', () => {
	it('should render without crashing', () => {
		shallow(<InfoItem />);
	});
});