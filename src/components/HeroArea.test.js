import React from 'react';
import { shallow, mount } from 'enzyme';
import HeroArea from './HeroArea';

it('Renders without crashing', () => {
	shallow(<HeroArea />)
});
