import axios from 'axios';

const BASE_URL = 'http://localhost:4000/';

export const getUsers = async (dispatch) => {
  return axios.get(`${BASE_URL}persons`)
      .then((resp) => {
        return resp;
      })
      .catch((error) => console.log(error));
};

export const getCurrentUser = async (id) => {
  return axios.get(`${BASE_URL}persons/${id}`)
      .then((resp) => {
        return resp;
      })
      .catch((error) => {
        return error.response;
      });
};


export const createUser = async (body) => {
  return axios.post(`${BASE_URL}persons`, body)
      .then((resp) => {
        return resp;
      })
      .catch((error) => console.log(error));
};

export const updateUser = async (body) => {
  return axios.put(`${BASE_URL}persons/${body.id}`, body)
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
