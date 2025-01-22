import axios from 'axios';

const API_URL = 'http://localhost:8080/users';

export const getUsers = async () => {
  return await axios.get(API_URL);
};

export const addUser = async (user) => {
  return await axios.post(API_URL, user);
};
