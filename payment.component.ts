import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  canClick=false;

  sayMessage() {
    window.alert("Payment Successfull");
  }
  message(message: any) {
    throw new Error('Method not implemented.');
  }

}
