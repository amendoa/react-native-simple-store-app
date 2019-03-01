import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {
	Button
} from 'src/shared/components';

describe('<Button />', () => {
	const getWrapper = props => renderer.create(
		<Button
			{
			...props
			}
		/>
	).toJSON();

	const modelI = {
		primary: true,
		text: 'button primary'
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
