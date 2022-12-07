import { fireEvent } from "@testing-library/react";
import React from "react";
import { getBooksByTitle } from "../../../module/book/bookAction";
import renderWithRedux from '../../../util/testUtil';
import BookFilter from '../BookFilter';

jest.mock("../../../module/book/bookAction");
describe('BookFilter', () => {
    it('should fire getBook by title action on click of search button', () => {
        const {getByLabelText, getByText} = renderWithRedux(<BookFilter />, {})
        getBooksByTitle.mockImplementation(() =>(dispatch) => {})

        const textField = getByLabelText('Enter book title');
        fireEvent.change(textField, { target: { value: 'test title'}});

        const searchButton = getByText('Search');
        fireEvent.click(searchButton);

        expect(getBooksByTitle).toHaveBeenCalledWith('test title');

    })
})