import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer',
  moduleId: module.id,
  templateUrl: 'customer.component.html'
})

export class CustomerComponent implements OnInit {
  @Input() customer: {id: number, name: string};

  constructor() {}

  ngOnInit() {}

}
