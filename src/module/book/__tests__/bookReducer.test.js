import bookReducer, {INITIAL_BOOK_REDUCER_STATE} from '../bookReducer';

describe('bookReducer', () => {
    it('should return updated state', () => {
        const action = {
            type: 'BOOKLIST',
            payload: [{
                id: 1,
                title: "Test title",
                description: "Test description",
                year_of_publish: 2018
            }]
        }
        const updatedState = bookReducer(INITIAL_BOOK_REDUCER_STATE, action);

        expect(updatedState).toEqual({
            books: [{
            id: 1,
            title: "Test title",
            description: "Test description",
            year_of_publish: 2018
            }],
            promise: {
                isPending: false,
                isFulfilled: false,
                isAnyError: false
            }
        })

    })
})