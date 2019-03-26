import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {
	Sketch
} from 'src/shared/components';

jest.useFakeTimers();

describe('<Sketch />', () => {
	const getWrapper = props => renderer.create(
		<Sketch
			{
			...props
			}
		/>
	).toJSON();

	const modelI = {
		width: 100,
		height: 100
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
