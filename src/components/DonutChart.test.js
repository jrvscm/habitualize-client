import React from 'react';
import { shallow, mount } from 'enzyme';
import DonutChart from './DonutChart';

it('Renders without crashing', () => {
	shallow(<DonutChart />)
});