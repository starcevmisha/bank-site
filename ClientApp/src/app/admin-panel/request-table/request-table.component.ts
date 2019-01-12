import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.css']
})
export class RequestTableComponent implements OnInit {
  public data: any[];

  public filterQuery = '';
  public rowsOnPage = 10;
  public sortBy = 'id';
  public sortOrder = 'asc';

  constructor(public http: HttpClient) {
    const token = localStorage.getItem('jwt');
    http.get<any>('http://localhost:5000/api/PaymentRequest/index', {
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

}
