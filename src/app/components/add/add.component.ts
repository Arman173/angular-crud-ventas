import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';

import { SalesService } from 'src/app/services/sales.service';
import { Sale } from 'src/app/models/sale';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [SalesService]
})
export class AddComponent implements OnInit {
  public _sale:Sale = new Sale('','',0,0);

  constructor(
    private _salesService:SalesService
  ) {}

  ngOnInit(): void {
  }

  onSubmit( form:NgForm ) {
    this._sale.Paid = '';
    console.log( form, 'addComponent', this._sale );

    this._salesService.newSale( this._sale ).subscribe(
      response => {
        console.log( response );
        form.reset();
      },
      err => {
        console.log( err );
        
      }
    );
  }

}
