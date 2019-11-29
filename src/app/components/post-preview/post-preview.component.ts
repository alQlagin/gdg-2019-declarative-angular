import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from '../../services/posts.service';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostPreviewComponent {
  @Input() post: Post;
}
