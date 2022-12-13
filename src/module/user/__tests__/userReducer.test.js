import userReducer, { USER_INITIAL_STATE } from "../userReducer";

describe('User reducer', () => {
    it('should be able to return new state for logged in user', () => {
        const newState = userReducer(USER_INITIAL_STATE, {
            type: 'USER_LOGIN',
            payload: {
                token: 'jwt token'
            }

        })

        expect(newState).toEqual({
            ...USER_INITIAL_STATE,
            token: 'jwt token'
        })
    })
})