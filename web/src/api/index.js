import axios from 'axios';

const url = 'http://localhost:3333/posts'

export const fetchPosts = () => axios.get(url);

export const creatPost = (newBody) => axios.post(url, newBody);