import {getBookService, getBooksByTitleService} from "./bookService";

export const getBooksByTitle = (title) => async (dispatch) => {
    try {
        dispatch({ type: 'BOOKLISTPENDING'});
        const books = await getBooksByTitleService(title);
        dispatch({
            type: 'BOOKSBYTITLE',
            payload: books.data
        });
        dispatch({ type: 'BOOKLISTFULFILLED'});
    } catch (error) {
        dispatch({ type: 'BOOKLISTERROR'})
    }
} 
export const getBookAction = () => async (dispatch) => {
    try {
        dispatch({ type: 'BOOKLISTPENDING'});
        const books = await getBookService();
        dispatch({
            type: 'BOOKLIST',
            payload: books.data
        });
        dispatch({ type: 'BOOKLISTFULFILLED'});
    } catch (error) {
        dispatch({ type: 'BOOKLISTERROR'});
    }

}

