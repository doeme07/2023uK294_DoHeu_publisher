import {AxiosInstance} from "axios";
import { defaultAxiosInstance } from "./Api";
import { User } from "./Types";


export const UserServicePost = (api: AxiosInstance = defaultAxiosInstance) => ({
    Login: async ({email, password}: User) => {
        const response = await api.post<any>(`login`, { email, password });
        if (response && response.status === 201) {
            console.log("publisher successfully updated");
        }else{
            console.log("asldfkjkj");
        }
        return response.data;
    }
});

export default UserServicePost;

