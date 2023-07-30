class Client {
    static backend = 'http://localhost:7070';

    toJson(response: Response) {
        console.log(response);
        if (response.status === 204) {
            return response;
        }
        return response.json();
    }

    checkStatus(response: Response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }

        throw new Error('invalid status');
    }

    request(url: string, options: RequestInit = {}) {
        return fetch(`${Client.backend}${url}`, options).then(this.checkStatus).then(this.toJson);
    }

    get<ResponseType>(url: string): Promise<ResponseType> {
        return this.request(url);
    }

    post<ResponseType, RequestType = object>(url: string, body: RequestType): Promise<ResponseType> {
        return this.request(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'},
        });
    }

    delete(url: string) {
        return this.request(url, {
            method: 'DELETE',
        });
    }
}

export const client = new Client();
