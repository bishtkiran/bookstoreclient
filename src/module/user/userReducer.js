export const USER_INITIAL_STATE = {
    token : window.localStorage.getItem('bookstore-token'),
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
        case 'LOGIN_PENDING' : {
            return {
                ...state,
                promise : {
                    isPending: true,
                    isFulfilled: false,
                    isAnyError: false
                }
            }
        }
        case 'LOGIN_ERROR' : {
            return {
                ...state,
                promise: {
                    isPending: false,
                    isFulfilled: false,
                    isAnyError: true
                }
            }
        }
        case 'LOGIN_SUCCESSFUL' : {
            return {
                ...state,
                promise: {
                    isPending: false,
                    isFulfilled: true,
                    isAnyError: false
                }
            }
        }
        default : {
            return state
        }
    }

}

export default userReducer;