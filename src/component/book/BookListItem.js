import React from "react";
import PropTypes from 'prop-types';
import styles from './BookStyles';
import { Avatar, Box, Paper, Typography } from "@material-ui/core";

const propTypes = {
    book : PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        yearOfPublish: PropTypes.number.isRequired

    }).isRequired,
}

const BookListItem = ({book}) => {
    const classes = styles();
    return(
        <Box mb={2}>
            <Paper elevation={2} className={classes.bookListItemPaper}>
                <Avatar className={classes.bookImage} variant="square">
                    {book.title}
                </Avatar>
                <Box ml={1}>
                    <Typography>{book.title}</Typography>
                    <Typography>{book.description}</Typography>
                    <Typography>{book.yearOfPublish}</Typography>
                </Box>
            </Paper>
        </Box>
    );
}
BookListItem.propTypes = propTypes;
export default BookListItem;