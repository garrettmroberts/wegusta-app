import axios from 'axios';

export default {
  createUser: (id, body) => {
    axios.post(`http://0.0.0.0:8080/api/users/${id}`, body)
  },
  updateUser:  (id, body) => {
    axios.put(`http://0.0.0.0:8080/api/users/${id}`, body)
  },
  getUser: async (id) => {
    return axios.get(`http://0.0.0.0:8080/api/users/${id}`)
  }
}