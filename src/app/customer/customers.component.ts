import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-customers',
  moduleId: module.id,
  templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {
  customers = [
    { id: 1, name: 'Ward' },
    { id: 2, name: 'Sally' },
    { id: 3, name: 'Eric' },
    { id: 4, name: 'Gage' },
    { id: 5, name: 'Emmet' }
  ];

  constructor() {
  }


  ngOnInit() {
  }

}
