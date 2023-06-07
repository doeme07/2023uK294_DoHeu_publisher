import axios, {AxiosInstance} from "axios";

const BASE_URL = 'http://localhost:3030/';

export const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL : BASE_URL,
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvbWluaTQ0M2NAbWFpbC5jb20iLCJpYXQiOjE2ODYxMjQxNjYsImV4cCI6MTY4NjEyNzc2Niwic3ViIjoiMTEifQ.HoYfBoswIjd59bMX4cgPrR7gooS45VyUwYOV7eSz3DE",
    }
});