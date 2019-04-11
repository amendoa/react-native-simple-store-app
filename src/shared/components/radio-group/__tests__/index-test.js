import {
	View
} from 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import {
	RadioGroup
} from 'src/shared/components';

describe('<RadioGroup />', () => {
	const getWrapper = props => renderer.create(
		<RadioGroup
			{
			...props
			}
		/>
	).toJSON();

	const modelI = {
		options: [
			{
				renderItem: () => (
					<View />
				),
				id: 1
			}
		],
		currentItemId: 1
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
