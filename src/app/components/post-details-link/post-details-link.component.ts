import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from '../../services/posts.service';

@Component({
  selector: 'app-post-details-link',
  templateUrl: './post-details-link.component.html',
  styleUrls: ['./post-details-link.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostDetailsLinkComponent {
  @Input() post: Post;
}
