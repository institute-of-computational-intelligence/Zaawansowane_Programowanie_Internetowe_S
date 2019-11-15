import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-first></app-first>
  <app-authors-list></app-authors-list>
  `,
  styles: []
})
export class AppComponent {
  title = 'Angular';
}
