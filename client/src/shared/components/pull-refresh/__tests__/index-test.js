import React from 'react';
import renderer from 'react-test-renderer';

import {
	PullRefresh
} from 'src/shared/components';

import {
	View
} from 'react-native';

jest.useFakeTimers();

describe('<TranslateAndOpacity />', () => {
	const getWrapper = props => renderer.create(
		<PullRefresh
			{
			...props
			}
		/>
	).toJSON();

	const modelI = {
		isRefreshing: false,
		onRefresh: () => {},
		contentView: (
			<View />
		)
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
