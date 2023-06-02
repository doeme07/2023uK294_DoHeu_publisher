import axios, {AxiosInstance} from "axios";

const BASE_URL = 'http://localhost:3030/';

export const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL : BASE_URL,
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvbWluaWMxMEBtYWlsLmNvbSIsImlhdCI6MTY4NTcxMzM4NywiZXhwIjoxNjg1NzE2OTg3LCJzdWIiOiI5In0.35DUPcapVCm3cV5UwAtA1toB7zKqEO-aBMU0vBsVWwk",
    }
});