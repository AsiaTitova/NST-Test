import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api/v1/';

export const getUsers = async () => {
  return axios.get(`${BASE_URL}persons`)
      .then((resp) => {
        return resp;
      })
      .catch((error) => console.log(error));
};

export const getCurrentUser = async (id) => {
  return axios.get(`${BASE_URL}persons?id=${id}`)
      .then((resp) => {
        return resp;
      })
      .catch((error) => console.log(error));
};


export const createUser = async (body) => {
  return axios.post(`${BASE_URL}persons`, body)
      .then((resp) => {
        return resp;
      })
      .catch((error) => console.log(error));
};

export const updateUser = async (id) => {
  return axios.put(`${BASE_URL}persons/${id}`)
      .then((resp) => {
        return resp;
      })
      .catch((error) => console.log(error));
};

export const deleteUser = async (id) => {
  return axios.delete(`${BASE_URL}persons/${id}`)
      .then((resp) => {
        return resp;
      })
      .catch((error) => console.log(error));
};
