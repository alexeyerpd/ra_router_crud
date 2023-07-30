import {client} from '../client';

export const frontend = {
    getPosts<T>() {
        return client.get<T>('/posts');
    },
    createPost<T>(body: object) {
        return client.post<T>('/posts', body);
    },
    removePost(id: number) {
        return client.delete(`/posts/${id}`);
    },
    getPost<T>(id: number) {
        return client.get<T>(`/posts/${id}`);
    },
};
