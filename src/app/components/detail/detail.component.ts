import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SalesService } from 'src/app/services/sales.service';
import { Sale } from 'src/app/models/sale';
import { sales } from 'src/app/models/sales.example';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [SalesService]
})
export class DetailComponent implements OnInit {
  public loaded:boolean = false;
  public showPopup:boolean = false;
  public sale:Sale = new Sale();
  //public sale:any;
  public payment:number = 0;

  constructor(
    private _salesService:SalesService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    // console.log('hola')
    this._route.params.subscribe( params => {
      const id = params.id;
      this.getSale( id );
      //this.sale = sales[3];
      console.log(this.sale);
    });
  }

  getSale( id:string ) {
    this._salesService.getSale( id ).subscribe(
      response => {
        this.sale = response.sale;
        console.log( this.sale );
        this.loaded = true;
      },
      err => {
        console.log( err );
      }
    );
  }

  showDeleteRequest() {
    this.showPopup = true;
  }
  hideDeleteRequest() {
    this.showPopup = false;
  }

  deleteSale() {
    this._salesService.deleteSale( this.sale._id ).subscribe(
      response => {
        console.log('sale:', response.sale, ' deleted');
        this._router.navigate(['/']);
      },
      err => {
        console.log( err );
      }
    );
  }

  addPay( form:NgForm) {
    console.log( form, this.payment, this.sale );
    this.loaded = false;
    this._salesService.addPayment( this.payment, this.sale ).subscribe(
      response => {
        console.log( response );
        form.reset();
        this.getSale( this.sale._id );
      },
      err => {
        console.log( err );
      }
    );
  }

}
