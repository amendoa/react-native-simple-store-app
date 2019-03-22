import React from 'react';
import styled from 'styled-components/native';
import constants from 'src/modules/constants';
import PropTypes from 'prop-types';

import {
	Navbar
} from 'src/shared/components';

const Wrapper = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	background-color: ${constants.COLORS.DEFAULT};
`;

const BagScene = props => (
	<Wrapper>
		<Navbar
			title="Bag"
			leftIcon={{
				icon: {
					icon: 'arrow-left',
					width: '24',
					height: '24',
					dark: true
				},
				onPress: () => {
					const {
						navigation
					} = props;

					navigation.navigate('catalog');
				}
			}}
		/>
	</Wrapper>
);

BagScene.propTypes = {
	navigation: PropTypes.shape({}).isRequired
};

export default BagScene;
