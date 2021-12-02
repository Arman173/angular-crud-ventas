import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SalesService } from 'src/app/services/sales.service';
import { Sale } from 'src/app/models/sale';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [SalesService]
})
export class EditComponent implements OnInit {
  public _sale:Sale = new Sale('','',0,0);

  constructor(
    private _router:Router,
    private _route:ActivatedRoute,
    private _salesService:SalesService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe( params => {
      const { id } = params;
      console.log( id );
      this.getSale( id );
    });
  }

  getSale( id:string ) {
    this._salesService.getSale( id ).subscribe(
      response => {
        this._sale = response.sale;
        console.log( this._sale );
        // this.loaded = true;
      },
      err => {
        console.log( err );
      }
    );
  }

  onSubmit( form:NgForm ) {
    
  }

}
