import axios from 'axios';

export const getUsers = async () => {
  return axios.get('http://localhost:4000/persons')
      .then((resp) => {
        return resp;
      })
      .catch((error) => console.log(error));
};
