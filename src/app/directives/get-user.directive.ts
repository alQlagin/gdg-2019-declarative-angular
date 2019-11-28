import {
  Directive,
  EmbeddedViewRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { User, UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

interface GetUserDirectiveContext {
  $implicit: User
}

@Directive({
  selector: '[appGetUser],[user]'
})
export class GetUserDirective implements OnChanges, OnDestroy {

  @Input()
  userIdentifiedBy: number;

  private context: GetUserDirectiveContext = {
    $implicit: null
  };
  private viewRef: EmbeddedViewRef<GetUserDirectiveContext>;
  private subscription: Subscription;

  constructor(
    private vcr: ViewContainerRef,
    private templateRef: TemplateRef<GetUserDirectiveContext>,
    private userService: UserService
  ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('userIdentifiedBy' in changes) {
      this.applyChanges();
    }
  }

  private applyChanges() {
    this.disposeSubscription();
    this.createSubscription();
  }

  private createSubscription() {
    this.subscription = this.userService.getById(this.userIdentifiedBy)
      .subscribe(author => {
        this.context.$implicit = author;
        this.createView();
      })
  }

  private createView() {
    if (!this.viewRef) {
      this.viewRef = this.vcr.createEmbeddedView(this.templateRef, this.context)
    }
  }

  private disposeSubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  ngOnDestroy(): void {
    this.disposeSubscription();
    this.disposeViewRef();
  }

  private disposeViewRef() {
    if (this.viewRef) {
      this.viewRef.destroy();
      this.viewRef = null;
    }
  }
}
