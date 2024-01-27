const initialState = {
    count: 0,
    isDecrementDisabled: true,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { 
                ...state, 
                count: state.count + 1,
                isDecrementDisabled: false, // Enable decrement button
            };

        case 'DECREMENT':
            return {
                 ...state, 
                 count: state.count > 0 ? state.count - 1 : 0,
                 isDecrementDisabled: state.count === 1, // Disable decrement button if count is zero
            };

        default:
            return state;
    }
};

export default counterReducer; 
