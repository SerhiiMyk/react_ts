import axios from 'axios'
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
    baseURL:'http://jsonplaceholder.typicode.com',
    headers:{}
});

const getPosts = () => {
    return axiosInstance.get<IPost[]>('/posts');
}
export {getPosts}