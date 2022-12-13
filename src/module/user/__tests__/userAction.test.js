import axios from 'axios';
import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import { loginAction } from '../userActions';

jest.mock('axios');
const middleware = [reduxThunk];
const mockStore = configureStore(middleware);

describe("Login action", () => {
    beforeEach(() => {
        axios.post.mockImplementation(() => {
            return Promise.resolve({
                data: {
                    token: 'jwt token'
                }
            })
        })
    })
    it('should be able to dispatch and store token in local storage', async () => {
        const store = mockStore({});

        await store.dispatch(loginAction('email', 'password'));
        const actions = store.getActions();

        expect(actions.length).toEqual(1);
        expect(actions[0]).toEqual({
            type: 'USER_LOGIN',
            payload: {
                token: 'jwt token'
            }
        })
    })
})