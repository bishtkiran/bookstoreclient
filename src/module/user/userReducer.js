export const USER_INITIAL_STATE = {
    token : '',
    promise: {
        isPending: false,
        isFulfilled: false,
        isAnyError: false
    }
};

const userReducer = (state = USER_INITIAL_STATE, action) => {
    switch(action.type){
        case 'USER_LOGIN' : {
            return {
                ...state,
                token: action.payload.token
            };
        }
        default : {
            return state
        }
    }

}

export default userReducer;