import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {
	Label
} from 'src/shared/components';

describe('<Label />', () => {
	const getWrapper = props => renderer.create(
		<Label
			{
			...props
			}
		/>
	).toJSON();

	const modelI = {
		text: 'teste',
		primary: true,
		fontSize: 10
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
