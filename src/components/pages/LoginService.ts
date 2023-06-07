import {AxiosInstance} from "axios";
import { defaultAxiosInstance } from "./Api";
import User from "./types";


export const PublisherServicePost = (api: AxiosInstance = defaultAxiosInstance) => ({
    getPublisher: async ({email, password, accessToken}: User) => {
        const response = await api.post<any>(`login`, { email, password });
        return response.data;
    }
});


export const PublisherServicePut = (api: AxiosInstance = defaultAxiosInstance) => ({
    getPublisher: async (id: any, {publisher_name, incorporation_date}: Publisher) => {
        const response = await api.put<any>(`publisher/${id}`, { publisher_name, incorporation_date });
        if (response && response.status === 200) {
            console.log("publisher successfully updated");
        }else{
            console.log("asldfkjkj");
        }
    }
});

export const PublisherServiceDelete = (api: AxiosInstance = defaultAxiosInstance) => ({
    getPublisher: async (id: any) => {
        console.log("test");
        const response = await api.delete<any>(`publisher/${id}`);
        if (response && response.status === 200) {
            console.log("publisher successfully deleted");
        }else{
            console.log("asldfkjkj");
        }
    }
});

export default PublisherServiceGet;

