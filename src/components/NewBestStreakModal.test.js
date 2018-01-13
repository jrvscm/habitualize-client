import React from 'react';
import {shallow, mount} from 'enzyme';
import NewBestStreakModal from './NewBestStreakModal';

describe('<NewBestStreakModal />', () => {
	it('should render without crashing', () => {
		shallow(<NewBestStreakModal />);
	});
});