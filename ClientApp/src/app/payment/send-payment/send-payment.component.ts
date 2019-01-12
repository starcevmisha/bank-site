import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-payment',
  templateUrl: './send-payment.component.html',
  styleUrls: ['./send-payment.component.css']
})
export class SendPaymentComponent implements OnInit {
  featureSelected = 'other-bank';

  onSelect(feature: string) {
    this.featureSelected = feature;
  }
  constructor() { }

  ngOnInit() {
  }

}
