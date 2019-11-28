import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    website: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private BASE_URL = 'https://jsonplaceholder.typicode.com/users';

    constructor(
        private http: HttpClient
    ) {
    }

    getById(id: number) {
        return this.http.get<User>(`${this.BASE_URL}/${id}`)
    }
}
