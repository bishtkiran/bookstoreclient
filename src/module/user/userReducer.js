export const USER_INITIAL_STATE = {
    token : window.localStorage.getItem('bookstore-token'),
    promise: {
        isPending: false,
        isFulfilled: false,
        isAnyError: false
    },
    registerPromise: {
        isPending: false,
        isFulfilled: false,
        isAnyError: false
    },
    user: null
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

        // register
        case 'USER_REGISTER' : {
            return {
                ...state,
                user: action.payload
            }
        }
        case 'REGISTER_PENDING' : {
            return {
                ...state,
                registerPromise: {
                    isPending: true,
                    isFulfilled: false,
                    isAnyError: false
                }
            }
        }
        case 'REGISTER_ERROR' : {
            return {
                ...state,
                registerPromise: {
                    isPending: false,
                    isFulfilled: false,
                    isAnyError: true
                }
            }
        }
        case 'REGISTER_SUCCESSFUL' : {
            return {
                ...state,
                registerPromise: {
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