import React from 'react';
import renderer from 'react-test-renderer';

import {
	Spinner
} from 'src/shared/components';

jest.useFakeTimers();

describe('<TranslateAndOpacity />', () => {
	const getWrapper = props => renderer.create(
		<Spinner
			{
			...props
			}
		/>
	).toJSON();

	const modelI = {

	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
