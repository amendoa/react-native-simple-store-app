import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {
	Image
} from 'src/shared/components';

describe('<Image />', () => {
	const getWrapper = props => renderer.create(
		<Image
			{
			...props
			}
		/>
	).toJSON();

	const modelI = {
		source: 'https://images.pexels.com/photos/1166990/pexels-photo-1166990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		thumbnailSource: 'https://images.pexels.com/photos/1166990/pexels-photo-1166990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=50&w=50',
		width: 500,
		height: 500
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
