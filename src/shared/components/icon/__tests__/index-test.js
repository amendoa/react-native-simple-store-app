import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {
	Icon
} from 'src/shared/components';

describe('<Icon />', () => {
	const getWrapper = props => renderer.create(
		<Icon
			{
			...props
			}
		/>
	).toJSON();

	const modelI = {
		icon: 'arrow-left',
		width: '50',
		height: '50',
		color: 'red',
		tag: true
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
