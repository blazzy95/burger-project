import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burgerbuilder-f71ac.firebaseio.com/'
});

export default instance;