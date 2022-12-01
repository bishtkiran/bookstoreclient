import axios from "axios";
import baseUrl from '../../config';

const getBookService = () => axios.get(`${baseUrl}/api/v1/books`);

export default getBookService;