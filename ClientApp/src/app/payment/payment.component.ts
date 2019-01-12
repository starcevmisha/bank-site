import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  selectedPaymentType = 'send';

  onSelectType(feature: string) {
    this.selectedPaymentType = feature;
  }

  constructor() { }

  ngOnInit() {
  }

}
