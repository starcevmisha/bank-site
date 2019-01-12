import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.css']
})
export class PaymentTableComponent implements OnInit {
  public data: any[];

  public filterQuery = '';
  public rowsOnPage = 10;
  public sortBy = 'id';
  public sortOrder = 'asc';

  constructor(public http: HttpClient) {
    const token = localStorage.getItem('jwt');
    http.get<any>('http://localhost:5000/api/cardpayment/index',{
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
    }).subscribe(result => {
      this.data = result;
      console.log(result);
    }, error => console.error(error));
  }

  ngOnInit() {

  }
  public toInt(num: string) {
    return +num;
  }

  public sortByWordLength = (a: any) => {
    return a.name.length;
  }

  public cancellPayment(payment: any) {
    this.http.patch<any>('http://localhost:5000/api/cardpayment/CancelPayment', payment.id)
      .subscribe(result => {
        payment.state = 1;
      }, error => console.error(error));

  }

}


