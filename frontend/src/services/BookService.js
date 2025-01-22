import axios from 'axios';

const API_URL = 'http://localhost:8080/books';

export const getBooks = async () => {
  return await axios.get(API_URL);
};

export const addBook = async (book) => {
  return await axios.post(API_URL, book);
};
