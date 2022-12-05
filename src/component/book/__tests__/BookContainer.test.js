import React from "react";
import renderWithRedux from "../../../util/testUtil";
import BookContainer from "../BookContainer";
import BookList from '../BookList';
import {getBookAction} from "../../../module/book/bookAction";

jest.mock('../BookList');
jest.mock('../../../module/book/bookAction');
describe('BookContainer', () => {

    beforeAll(() => {
        BookList.mockImplementation(() => <div>mock booklist component</div>)
    })

    it('should render Book Container without errors', () => {
        const books = [
            {
                id: 1,
                title: "Test title",
                description: "Test description",
                yearOfPublish: 2018
            },
        ];
        getBookAction.mockImplementation(() => ({
            type: 'BOOKLIST',
            payload: books
        }));
        renderWithRedux(<BookContainer />, {});
        expect(BookList).toHaveBeenCalledWith({ books }, {});

    });

    it('should display loader when isPending is true', () => {
        getBookAction.mockImplementation(() => ({
            type: 'BOOKLISTPENDING'
        }));
        const { getByTestId } = renderWithRedux(<BookContainer />, {});
        expect(getByTestId('book-loader')).toBeInTheDocument;
    });

    it('should display error message when error occur', () => {
        getBookAction.mockImplementation(() => ({
            type: 'BOOKLISTERROR'
        }));
        const {getByTestId} = renderWithRedux(<BookContainer />, {});
        expect(getByTestId('book-error-message')).toBeInTheDocument;
    });
});