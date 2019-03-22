import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {
	SelectColor
} from 'src/shared/components';

describe('<SelectColor />', () => {
	const getWrapper = props => renderer.create(
		<SelectColor
			{
			...props
			}
		/>
	).toJSON();

	const modelI = {
		currentIdSelected: '',
		handleChangeValue: () => {},
		items: [
			{
				color: '#ffffff',
				id: '3c8606bc-3ad7-4f57-be31-aa085bc7c280'
			},
			{
				color: '#ffb7c3',
				id: 'c7690ac0-1288-4323-b233-7ecda4c7399d'
			},
			{
				color: '#a6e0fe',
				id: '6e15c069-62ae-4979-8227-9f404543c9fc'
			}
		]
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
