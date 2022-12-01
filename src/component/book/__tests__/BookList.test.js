import React from "react";
import { render } from "@testing-library/react";
import BookList from "../BookList";
import BookListItem from "../BookListItem";
import { jssPreset } from "@material-ui/core";

jest.mock('../BookListItem');
describe('Book List', () => {

    beforeAll(() => {
        BookListItem.mockImplementation(() => <div>mock booklistItem component</div>)
    })

    const books = [
        {
            id: 1,
            title: "Test title",
            description: "Test description",
            yearOfPublish: 2018
        },
        {
            id: 2,
            title: "New test title",
            description: "New test description",
            yearOfPublish: 2019
        },
    ];
    it('should be able to render booklist without error', () => {
        render(<BookList books={books}/>)
        expect(BookListItem).toHaveBeenCalledTimes(2);
        expect(BookListItem).toHaveBeenCalledWith({book: books[0]}, {});
        expect(BookListItem).toHaveBeenCalledWith({book: books[1]}, {});

    })
})
