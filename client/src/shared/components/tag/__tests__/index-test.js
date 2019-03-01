import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {
	Tag
} from 'src/shared/components';

describe('<Tag />', () => {
	const getWrapper = props => renderer.create(
		<Tag
			{
			...props
			}
		/>
	).toJSON();

	const modelI = {
		width: 50,
		height: 50,
		primary: true
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
