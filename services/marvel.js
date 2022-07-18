import axios from 'axios'

const params = new URLSearchParams();
params.append('hash', 'c3b6116417e420e90fc9025fa324a5bf');
params.append('apikey', '5c431f9328fdbe4b9d7070e3d2a1df82' );
params.append('ts', 1647221455);

const marvel = axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public', params
})

export default marvel