import React from 'react';
import {shallow, mount} from 'enzyme';
import BarGraph from './BarGraph';

describe('<BarGraph />', () => {
	it('should render without crashing', () => {
		shallow(<BarGraph />);
	});
});