import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import {
	Image,
	SelectColor,
	InputNumber,
	Tag,
	Button,
	ConfirmAlert
} from 'src/shared/components';

const Wrapper = styled.View`
	margin-bottom: ${props => (props.isLastItem ? '32px' : '32px')};
	width: 100%;
	height: 320px;
`;

const ActionsContainer = styled.View`
	width: 100%;
	height: 100%;
	position: absolute;
	justify-content: space-between;
	flex-direction: row;
	padding: 16px;
`;

const Item = styled.View`
	justify-content: flex-end;
`;

const SelectColorContainer = styled.View`
	margin-bottom: 16px;
`;

const CloseButtonContainer = styled.View`
	right: 0;
	top: 0;
	position: absolute;
`;

const BagProductCard = (props) => {
	const confirmRemoveItemAlert = React.createRef();
	const {
		model
	} = props;

	const {
		imageSource,
		imageThumbnailSource,
		price
	} = model;

	return (
		<Wrapper
			{
			...props
			}
		>
			<ConfirmAlert
				ref={confirmRemoveItemAlert}
				handleConfirm={() => {}}
			/>
			<Image
				source={imageSource}
				thumbnailSource={imageThumbnailSource}
				width="100%"
				height="100%"
			/>
			<ActionsContainer>
				<CloseButtonContainer>
					<Button
						icon={{
							icon: 'close',
							width: '32',
							height: '32',
							dark: true
						}}
						onPress={() => {
							confirmRemoveItemAlert.current.openConfirm();
						}}
					/>
				</CloseButtonContainer>
				<Item>
					<SelectColorContainer>
						<SelectColor
							items={[
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
							]}
							currentIdSelected="3c8606bc-3ad7-4f57-be31-aa085bc7c280"
							handleChangeValue={() => {}}
						/>
					</SelectColorContainer>
					<Tag
						default
						label={{
							dark: true,
							text: price
						}}
					/>
				</Item>
				<Item>
					<InputNumber
						value={1}
						handleChangeValue={() => {}}
					/>
				</Item>
			</ActionsContainer>
		</Wrapper>
	);
};

BagProductCard.defaultProps = {
	model: {}
};

BagProductCard.propTypes = {
	model: PropTypes.shape({
		imageSource: PropTypes.string,
		imageThumbnailSource: PropTypes.string,
		price: PropTypes.string,
	})
};

export default BagProductCard;
