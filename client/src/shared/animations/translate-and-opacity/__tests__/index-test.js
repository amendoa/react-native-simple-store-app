import React from 'react';
import renderer from 'react-test-renderer';

import {
	Text
} from 'react-native';

import {
	TranslateAndOpacityAnimation
} from 'src/shared/animations';

jest.useFakeTimers();

describe('<TranslateAndOpacity />', () => {
	const getWrapper = props => renderer.create(
		<TranslateAndOpacityAnimation
			{
			...props
			}
		>
			<Text>
				{
					'Teste'
				}
			</Text>
		</TranslateAndOpacityAnimation>
	).toJSON();

	const modelI = {
		useNativeDriver: false
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
