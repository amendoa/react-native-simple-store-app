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
		primary: true,
		label: {
			dark: true,
			text: '49,99$'
		}
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
