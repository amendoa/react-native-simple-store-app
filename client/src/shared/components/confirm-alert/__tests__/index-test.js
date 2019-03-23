import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {
	ConfirmAlert
} from 'src/shared/components';

describe('<ConfirmAlert />', () => {
	const getWrapper = props => renderer.create(
		<ConfirmAlert
			{
			...props
			}
		/>
	).toJSON();

	const modelI = {
		handleConfirm: () => {}
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
