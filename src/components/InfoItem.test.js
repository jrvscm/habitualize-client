import React from 'react';
import { shallow, mount } from 'enzyme';
import InfoItem from './InfoItem';

it('Renders without crashing', () => {
	shallow(<InfoItem />)
});