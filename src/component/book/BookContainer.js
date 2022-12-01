import { Box } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getBookAction from "../../module/book/bookAction";
import { getBookSelector, getBookPromiseSelector } from "../../module/book/bookSelector";
import BookFilter from "./BookFilter";
import BookList from "./BookList";
import styles from "./BookStyles";

const BookContainer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBookAction());
    }, [dispatch]);
    const books = useSelector(getBookSelector);
    const bookPromise = useSelector(getBookPromiseSelector);
    
    const classes = styles();
    return(
        <Box className={classes.bookContainer}>
            <BookFilter />
            <Box className={classes.bookList} >
                { bookPromise.isPending &&(
                    <Box ml={5}>
                         <Skeleton data-testid="book-loader" variant="rect" animation="pulse" width="80%" height={200} />
                    </Box>
                ) }
                { bookPromise.isAnyError && <div data-testid="book-error-message">Error Message....</div> }
                <BookList books={books} />
            </Box>
        </Box>

    );

}

export default BookContainer;