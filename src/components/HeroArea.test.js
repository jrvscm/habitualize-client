import React from 'react';
import {shallow, mount} from 'enzyme';
import HeroArea from './HeroArea';

describe('<HeroArea />', () => {
	it('should render without crashing', () => {
		shallow(<HeroArea />);
	});
});