import React from 'react';
import {shallow, mount} from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store';
import PercentSuccess from './PercentSuccess';

describe('<PercentSuccess />', () => {

	it('should render without crashing', () => {
		shallow(
		<Provider store={store}>
			<PercentSuccess percentSuccess={10} />
		</Provider>
		);
	});
});