import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
    <nav>
    </nav>
  <router-outlet></router-outlet>
`,
  styleUrls: [ 'css/app.component.css' ]
})
export class AppComponent {
  title = 'Application';
}
