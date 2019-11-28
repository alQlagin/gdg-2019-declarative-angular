import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authored-page',
  templateUrl: './authored-page.component.html',
  styleUrls: ['./authored-page.component.css']
})
export class AuthoredPageComponent {

  private userId = this.route.paramMap.pipe(
    map(params => +params.get('userId'))
  );

  constructor(
    private route: ActivatedRoute
  ) {
  }
}
