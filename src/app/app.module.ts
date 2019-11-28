import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthoredPageComponent } from './pages/authored-page/authored-page.component';
import { GetUserDirective } from './directives/get-user.directive';
import { GetPostsDirective } from './directives/get-posts.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostsPageComponent,
    PostPageComponent,
    AuthoredPageComponent,
    GetUserDirective,
    GetPostsDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'posts',
        component: PostsPageComponent
      },
      {
        path: 'authored/:userId',
        component: AuthoredPageComponent
      },
      {
        path: 'posts/:post',
        component: PostPageComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'posts'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
