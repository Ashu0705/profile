import {HttpClient} from '../http-service/api';
import API_LIST from '../http-service/list';

export const profiles = async (payload: { name: string; email: string; age?: number, id?: string }) => {
    if (payload.id) {
        // Update existing profile
        return HttpClient.put(`${API_LIST.profiles}/${payload.id}`, payload); // Assuming PUT is used for updates
    } else {
    return HttpClient.post(API_LIST.profiles,payload);
    }
}

export const getProfile = async (id:string) => {
    return HttpClient.get(`${API_LIST.profiles}/${id}`);
}

export const deleteProfile = async (id: string) => {
    return HttpClient.delete(`${API_LIST.profiles}/${id}`); // Assuming DELETE is used for deletion
}