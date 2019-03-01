const initialState = {
	teste: 'teste redux'
};

function defaultReducer (state = initialState, action) {
	switch (action.type) {
		case 'teste':
			return state;
		default:
			return state;
	}
}

export default defaultReducer;
