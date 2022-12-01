import React from "react";
import { render } from "@testing-library/react";
import BookListItem from "../BookListItem";


describe('BookListItem', () => {
    it('should render Booklistitem without error', () => {
        const book =  {
            id: "1",
            title: "Test title",
            description: "Test description",
            yearOfPublish: 2018
        };
        const {getByText, getAllByText} = render(<BookListItem book={book}/>)
        expect(getAllByText('Test title')[0]).toBeInTheDocument;
        expect(getByText('Test description')).toBeInTheDocument;
        expect(getByText('2018')).toBeInTheDocument;

    })
})