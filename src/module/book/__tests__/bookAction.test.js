import axios from 'axios';
import configureStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import {getBookAction, getBooksByTitle} from '../bookAction';

jest.mock('axios');
const middleware = [reduxThunk];
const mockStore = configureStore(middleware);
describe('BookActions', () => {
    
    beforeEach(() => {
        axios.get.mockImplementation(() => Promise.resolve({data: [{
            id: 1,
            title: "Test title",
            description: "Test description",
            year_of_publish: 2018
        }]}));
    })
    it('should be able to dispatch success action', async () => {
        const store = mockStore({});

       

        await store.dispatch(getBookAction());
        const actions = store.getActions();
        expect(actions.length).toEqual(3);
        expect(actions[1]).toEqual({
            type: 'BOOKLIST',
            payload: [{
                id: 1,
                title: "Test title",
                description: "Test description",
                year_of_publish: 2018
            }]
        })

    });
    it('should be able to dispatch search book by title action', async() => {
        const store = mockStore({});

        await store.dispatch(getBooksByTitle('test title'));

        const actions = store.getActions();
        expect(actions.length).toEqual(3);
        expect(actions[1]).toEqual({
            type: 'BOOKSBYTITLE',
            payload: [{
                id: 1,
                title: "Test title",
                description: "Test description",
                year_of_publish: 2018
            }]
        })
    });
    it('should be able to dispatch error action', async () => {
        const store = mockStore({});
        axios.get.mockImplementation(() => {
            throw new Error();
        })
        await store.dispatch(getBooksByTitle('test title'));

        const actions = store.getActions();

        expect(actions.length).toEqual(2);
        expect(actions[1]).toEqual({
            type: 'BOOKLISTERROR'
        })
    })
})