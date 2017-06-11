import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  {
  name = 'Angular';
  title = 'Customer App';
  wardsColor = 'blue';

  changeSuitColor() {
    this.wardsColor = this.wardsColor === 'blue' ? 'red' : 'blue';
  }
}
