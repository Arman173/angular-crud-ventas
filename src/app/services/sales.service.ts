import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from "rxjs";
import * as moment from 'moment';

import { Global } from './Global';
import { Sale } from '../models/sale';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  public url:string;

  constructor(
    private _http:HttpClient
  ) {
    this.url = Global.url;
  }

  getSale( id:string ):Observable<any> {
    return this._http.get( this.url + '/get-sale/' + id );
  }

  getSales():Observable<any> {
    return this._http.get( this.url );
  }
  
  addPayment( pay:number, sale:Sale ):Observable<any> {

    sale.Status = +sale.Status + pay;
    console.log(sale.Status);

    if( sale.Status >= sale.Amount ) {
      sale.Paid = moment( new Date() ).format("YYYY/MM/DD").toString();
    }
    
    const params = JSON.stringify( sale );

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put( this.url + '/update-sale', params, { headers } );
  }

  newSale( sale:Sale ):Observable<any> {

    //sale._id = Global.getId(10);
    if( sale.Status >= sale.Amount ) {
      sale.Paid = sale.Date;
    }

    const params = JSON.stringify( sale );
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    console.log( 'SalesService', sale );

    return this._http.post( this.url + '/add-sale', params, { headers } );
  }

  deleteSale( id:string ):Observable<any> {
    return this._http.delete( this.url + '/delete-sale/' + id );
  }

}
