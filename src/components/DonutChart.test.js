import React from 'react';
import {shallow, mount} from 'enzyme';
import DonutChart from './DonutChart';

describe('<DonutChart />', () => {
	it('should render without crashing', () => {
		shallow(<DonutChart />);
	});
});