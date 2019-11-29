import { Component, Input } from '@angular/core';
import { User } from '../../services/user.service';

@Component({
  selector: 'app-authored-link',
  templateUrl: './authored-link.component.html',
  styleUrls: ['./authored-link.component.css']
})
export class AuthoredLinkComponent {
  @Input() author: User;
}
