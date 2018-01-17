import React from 'react';
import { shallow, mount } from 'enzyme';
import BarGraph from './BarGraph';

it('Renders without crashing', () => {
	shallow(<BarGraph />)
});