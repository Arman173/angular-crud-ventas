import { Component, OnInit } from '@angular/core';

import { SalesService } from 'src/app/services/sales.service';
import { Global } from 'src/app/services/Global';
import { sales } from 'src/app/models/sales.example'

import { Sale } from 'src/app/models/sale';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
  providers: [SalesService]
})
export class SalesComponent implements OnInit {
  public sales:Array<any> = [];

  constructor(
    private _salesService:SalesService
  ) {

  }

  ngOnInit(): void {
    this.getSales();
    //this.sales = sales;
  }

  getSales() {
    this._salesService.getSales().subscribe(
      response => {
        this.sales = response.sales;
        console.log( this.sales );
      },
      err => {
        console.log( err );
      }
    );
  }

}
