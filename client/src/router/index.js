import React from 'react';

import store from 'src/redux/store';
import * as reduxCatalogActions from 'src/redux/actions/catalog';

import {
	Catalog
} from 'src/scenes';

import {
	Scene,
	Router,
	Stack,
} from 'react-native-router-flux';

export default () => (
	<Router>
		<Stack
			hideNavBar
			key="root"
		>
			<Scene
				key="catalog"
				component={Catalog}
				onEnter={() => {
					store.dispatch(reduxCatalogActions.getCatalogs({
						resetCurrentPage: false
					}));
				}}
			/>
		</Stack>
	</Router>
);
