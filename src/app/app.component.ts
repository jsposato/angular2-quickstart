import { Component } from '@angular/core';

@Component( {
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html'
} )
export class AppComponent {
  name = 'John';
  title = 'Customer App';
  wardsColor = 'green';

  changeSuitColor() {
    this.wardsColor = this.wardsColor === 'green' ? 'red' : 'green';
  }

}
