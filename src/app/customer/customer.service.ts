import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

const URL_CUSTOMER = 'app/customer/customers.json';

@Injectable()
export class CustomerService {
  constructor( private _http: Http ) {
  }

  getCustomers() {
    return this._http.get( URL_CUSTOMER )
      .map((response: Response) => response.json())
      .catch(this._handleError);
  }

  _handleError(err: any) {
    console.log(err);
    return Observable.throw(err);
  }
}