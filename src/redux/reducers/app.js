const initialState = {
    isTest:false
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'TEST_SAGA_SUCCESS':
            return {
                ...state,
                isTest: true
            }
        default:
            return state
    }
}

module.exports = appReducer;
