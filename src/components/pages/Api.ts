import axios, {AxiosInstance} from "axios";

const BASE_URL = 'http://localhost:3030/';

export const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL : BASE_URL,
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvbWluMjM0aWNAbWFpbC5jb20iLCJpYXQiOjE2ODYxMzIzOTEsImV4cCI6MTY4NjEzNTk5MSwic3ViIjoiMTIifQ.TMZcD6gynvrGgKWkFStdFKR_L0785ghYPJeh5BQ7cWo",
    }
});