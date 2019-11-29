import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, PostsService, PostWithAuthor } from '../../services/posts.service';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent {

  postSubject = this.route.paramMap.pipe(
    switchMap(params => this.loadPost(+params.get('post'))),
  );

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private userService: UserService,
  ) {
  }

  loadPost(id: number): Observable<PostWithAuthor> {
    return this.postsService.getById(id).pipe(
      switchMap(post => this.loadAuthor(post))
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
