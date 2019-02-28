import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {
	Button
} from 'src/shared/components';

it('renders correctly', () => {
	const tree = renderer.create(
		<Button />
	).toJSON();

	expect(tree).toMatchSnapshot();
});
