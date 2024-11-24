import { axios as Instance } from "./service";

class HttpRequest {
    delete(url: string): Promise<void> {
        return Instance.delete(`${url}`);
    }

    get<T>(url: string): Promise<T> {
        return Instance.get<T>(`${url}`).then(response => response.data);
    }

    post<T>(url: string, body: T): Promise<T> {
        return Instance.post<T>(`${url}`, body).then(response => response.data);
    }

    put<T>(url: string, body: T): Promise<T> {
        return Instance.put<T>(`${url}`, body).then(response => response.data);
    }
}
const HttpClient = new HttpRequest();
export { HttpClient }