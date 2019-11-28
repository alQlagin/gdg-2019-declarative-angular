import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Post {
    id: number
    userId: number
    title: string
    body?: string
}

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    private BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

    constructor(
        private readonly http: HttpClient
    ) {
    }

    fetch(): Observable<Post[]> {
        return this.http.get<Post[]>(this.BASE_URL)
    }

    getById(id: number): Observable<Post> {
        return this.http.get<Post>(`${this.BASE_URL}/${id}`)
    }
}
