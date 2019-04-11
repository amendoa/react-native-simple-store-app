import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {
	InputNumber
} from 'src/shared/components';

describe('<InputNumber />', () => {
	const getWrapper = props => renderer.create(
		<InputNumber
			{
			...props
			}
		/>
	).toJSON();

	const modelI = {
		text: 10,
		handleChangeValue: () => {}
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
