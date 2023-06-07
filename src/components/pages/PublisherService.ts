import {AxiosInstance} from "axios";
import { defaultAxiosInstance } from "./Api";
import Publisher from "./types";



export const PublisherServiceGetbyId = (api: AxiosInstance = defaultAxiosInstance) => ({
    getPublisherById: async (id: number) => {
        const response = await api.get<Publisher>(`publisher/${id}`);
        return response.data;
    }
});

export const PublisherServiceGet= (api: AxiosInstance = defaultAxiosInstance) => ({
    getPublisher: async () => {
        const response = await api.get<Publisher[]>(`publisher`);
        return response.data;
    }
});

export const PublisherServicePost = (api: AxiosInstance = defaultAxiosInstance) => ({
    postPublisher: async ({publisher_name, incorporation_date}: Publisher) => {
        console.log("testing..")
        console.log(publisher_name);
        console.log(incorporation_date)
        const response = await api.post<any>(`publisher`, { publisher_name, incorporation_date });
        console.log(response);
        if (response && response.status === 200) {
            console.log("publisher successfully updated");
        }else{
            console.log("asldfkjkj");
        }
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

