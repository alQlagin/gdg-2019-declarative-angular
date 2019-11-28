import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, PostsService } from '../../services/posts.service';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { User, UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authored-page',
  templateUrl: './authored-page.component.html',
  styleUrls: ['./authored-page.component.css']
})
export class AuthoredPageComponent {

  userId = this.route.paramMap.pipe(
    map(params => +params.get('userId'))
  );
  authorSubject = this.userId.pipe(
    switchMap(userId => this.loadAuthor(userId))
  );

  postsSubject: Observable<Post[]> = this.authorSubject.pipe(
    switchMap(author => this.loadPosts(author.id))
  );

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private userService: UserService,
  ) {
  }

  loadAuthor(userId: number): Observable<User> {
    return this.userService.getById(userId).pipe(
      shareReplay({bufferSize: 1, refCount: true})
    )
  }

  loadPosts(userId) {
    return this.postsService.fetch({userId: userId.id})
  }
}
