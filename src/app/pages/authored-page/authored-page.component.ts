import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Post, PostsService, PostWithAuthor } from '../../services/posts.service';
import { map, mergeMap, shareReplay, switchMap, toArray } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authored-page',
  templateUrl: './authored-page.component.html',
  styleUrls: ['./authored-page.component.css']
})
export class AuthoredPageComponent {
  authorSubject = this.route.paramMap.pipe(
    map(params => +params.get('userId')),
    switchMap(userId => this.userService.getById(userId)),
    shareReplay({bufferSize: 1, refCount: true})
  );

  postsSubject: Observable<Post[]> = this.authorSubject.pipe(
    switchMap(author => this.postsService.fetch({userId: author.id}))
  );

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private userService: UserService,
  ) {
  }

}
