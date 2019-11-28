import {
  Directive,
  EmbeddedViewRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { Post, PostsService } from '../services/posts.service';
import { Subscription } from 'rxjs';

interface GetPostsContext {
  $implicit: Post[]
}

@Directive({
  selector: '[appGetPosts], [posts]'
})
export class GetPostsDirective implements OnChanges, OnDestroy, OnInit {
  @Input()
  postsOf: number;

  context: GetPostsContext = {
    $implicit: []
  };
  private viewRef: EmbeddedViewRef<GetPostsContext>;
  private subscription: Subscription;

  constructor(
    private vcr: ViewContainerRef,
    private templateRef: TemplateRef<GetPostsContext>,
    private postsService: PostsService
  ) {
  }

  ngOnInit(): void {
    if (!this.postsOf) {
      this.createSubscription();
    }
  }

  ngOnDestroy(): void {
    this.disposeSubscription();
    this.disposeView();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('postsOf' in changes) {
      this.applyChanges();
    }
  }

  private applyChanges() {
    this.disposeSubscription();
    this.createSubscription();
  }

  private disposeSubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  private createSubscription() {
    this.subscription = this.postsService.fetch({userId: this.postsOf})
      .subscribe(posts => {
        this.context.$implicit = posts;
        this.createView();
      })
  }

  private createView() {
    if (!this.viewRef) {
      this.viewRef = this.vcr.createEmbeddedView(this.templateRef, this.context);
    }
  }

  private disposeView() {
    if (this.viewRef) {
      this.viewRef.destroy();
      this.viewRef = null;
    }
  }
}
