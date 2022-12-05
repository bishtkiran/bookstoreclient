import axios from "axios";
import baseUrl from '../../config';

export const getBookService = () => axios.get(`${baseUrl}/api/v1/books`);

export const getBooksByTitleService = (title) => axios.get(`${baseUrl}/api/v1/books/${title}`);

