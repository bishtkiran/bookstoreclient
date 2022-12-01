import React from "react";
import PropTypes from 'prop-types';
import { Box } from "@material-ui/core";
import styles from './BookStyles';
import BookListItem from "./BookListItem";

const propTypes = {
    books: PropTypes.arrayOf({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        yearOfPublish: PropTypes.number.isRequired
    }).isRequired,
}

const BookList = ({books}) => {
    const classes = styles();
    return(
        <Box className={classes.bookList} ml={5}>
            {
                books.map((book) => <BookListItem book={book} key={book.id} /> )
            }
        </Box>
    )

}
BookList.propTypes = propTypes;
export default BookList;