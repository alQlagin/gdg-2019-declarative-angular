import { Component } from '@angular/core';
import { Post, PostsService, PostWithAuthor } from '../../services/posts.service';
import { map, mergeMap, switchMap, toArray } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent {

  postsSubject = this.postsService.fetch().pipe(
    switchMap(posts => this.loadAuthors(posts))
  );

  constructor(
    private postsService: PostsService,
    private userService: UserService,
  ) {
  }

  loadAuthors(posts: Post[]): Observable<PostWithAuthor[]> {
    return from(posts).pipe(
      mergeMap(post => this.loadAuthor(post)),
      toArray()
    )
  }

  loadAuthor(post: Post): Observable<PostWithAuthor> {
    return this.userService.getById(post.userId).pipe(
      map(author => ({
        ...post,
        author
      }))
    )
  }
}
