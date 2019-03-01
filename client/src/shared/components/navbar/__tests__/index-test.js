import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {
	Navbar
} from 'src/shared/components';

describe('<Navbar />', () => {
	const getWrapper = props => renderer.create(
		<Navbar
			{
			...props
			}
		/>
	).toJSON();

	const modelI = {
		title: 'teste',
		leftIcon: {
			icon: {
				icon: 'info',
				width: '24',
				height: '24',
				dark: true
			},
			onPress: () => {
			}
		},
		rightIcons: [
			{
				icon: {
					icon: 'info',
					width: '24',
					height: '24',
					dark: true
				},
				onPress: () => {
				}
			},
			{
				icon: {
					icon: 'bag',
					width: '24',
					height: '24',
					dark: true,
					tag: true
				},
				onPress: () => {
				}
			}
		]
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
