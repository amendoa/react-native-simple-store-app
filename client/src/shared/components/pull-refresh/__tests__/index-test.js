import {
	Text
} from 'react-native';
import renderer from 'react-test-renderer';
import React from 'react';

import {
	PullRefresh
} from 'src/shared/components';

jest.mock('react-native-gesture-handler', () => ({
	PanGestureHandler: 'View',
	State: {},
	ScrollView: 'View'
}));

describe('<PullRefresh />', () => {
	const getWrapper = props => renderer.create(
		<PullRefresh
			{
			...props
			}
		>
			<Text>
				{
					'teste'
				}
			</Text>
		</PullRefresh>
	).toJSON();

	const modelI = {
		isRefreshing: false,
		isFetching: false,
		onRefresh: jest.fn(),
		onLoadMore: jest.fn(),
		canLoadMore: false
	};

	it('renders correctly', () => {
		const tree = getWrapper(modelI);
		expect(tree).toMatchSnapshot();
	});
});
