import { Component, Input, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/shared/intefaces/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @Input() customer: ICustomer;

  constructor() { }

  ngOnInit(): void {
    console.log('Customer loaded', this.customer);
    
  }

}
