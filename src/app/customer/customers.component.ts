import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs/Observable';

@Component( {
  selector: 'app-customers',
  moduleId: module.id,
  templateUrl: 'customers.component.html',
  providers: [ CustomerService ]
} )
export class CustomersComponent implements OnInit {

  customers: Observable<any[]>;

  constructor( private _customerService: CustomerService ) {
  }


  ngOnInit() {
    this.customers = this._customerService.getCustomers();
  }

}
