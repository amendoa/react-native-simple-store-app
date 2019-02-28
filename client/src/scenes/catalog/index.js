import React from 'react';

import styled from 'styled-components/native';

import {
	connect
} from 'react-redux';

const Wrapper = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

const StyledText = styled.Text`
	color: #00bcd4;
	font-size: 50px;
	font-family: quicksand-bold
`;

const StyledTextTest = styled.Text`
	color: #00bcd4;
	font-size: 50px;
`;

function Catalog () {
	return (
		<Wrapper>
			<StyledText>
				{
					'Payment'
				}
			</StyledText>
			<StyledTextTest>
				{
					'Payment'
				}
			</StyledTextTest>
		</Wrapper>
	);
}

const mapStateToProps = (state) => {
	return {
		defaultreducer: state.defaultreducer
	};
};

export default connect(
	mapStateToProps,
	null
)(Catalog);
