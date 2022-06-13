import axios from 'axios';

export default {
  signUp: (body) => {
    axios.post('http://0.0.0.0:8080/api/users/create', body)
  }
}