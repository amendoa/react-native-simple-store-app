import React from 'react';
import styled from 'styled-components/native';
import constants from 'src/modules/constants';
import PropTypes from 'prop-types';

import {
	Navbar,
	Label,
	Button
} from 'src/shared/components';

import {
	Linking
} from 'react-native';

const Wrapper = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	background-color: ${constants.COLORS.DEFAULT};
`;

const Content = styled.View`
	flex: 1;
	background-color: ${constants.COLORS.DEFAULT};
	width: 100%;
	padding: 32px 0px 0px 24px;
`;

const Item = styled.View`
	flex-direction: row;
	align-items: center;
`;

const items = [
	{
		title: 'design by',
		desc: 'matheus almeida',
		link: 'https://github.com/almeida-matheus',
		key: 1
	},
	{
		title: 'code by',
		desc: 'matheus almeida',
		link: 'https://github.com/almeida-matheus',
		key: 2
	},
	{
		title: 'photos by',
		desc: 'icons8 photos',
		link: 'https://photos.icons8.com/',
		key: 3
	},
	{
		title: 'icons by',
		desc: 'evericons',
		link: 'http://www.evericons.com/?ref=evernote.design',
		key: 4
	},
	{
		title: 'icons by',
		desc: 'flaticon',
		link: 'https://www.flaticon.com',
		key: 5
	}
];

const AboutScene = props => (
	<Wrapper>
		<Navbar
			title="about"
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

					navigation.goBack();
				}
			}}
		/>
		<Content>
			{
				items.map(item => (
					<Item
						key={item.key}
					>
						<Label
							dark
							fontSize={18}
							text={item.title}
						/>
						<Button
							buttonMargin="0px 0px 0px 0px"
							buttonPadding="0px 0px 0px 0px"
							onPress={() => {
								Linking.openURL(item.link);
							}}
						>
							<Label
								primary
								fontSize={18}
								text={item.desc}
								margin="0px 0px 0px 8px"
							/>
						</Button>
					</Item>
				))
			}
		</Content>
	</Wrapper>
);

AboutScene.defaultProps = {
	navigation: {
		navigate: () => {},
		goBack: () => {}
	}
};

AboutScene.propTypes = {
	navigation: PropTypes.shape({})
};

export default AboutScene;
