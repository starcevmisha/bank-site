import { Component, OnInit } from '@angular/core';
import { Input } from '../../input.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, ResponseType, ResponseContentType } from '@angular/http';
// import { pipe } from 'rxjs';
// import { map } from 'rxjs/operators';


declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-own-bank',
  templateUrl: './own-bank.component.html',
  styleUrls: ['./own-bank.component.css']
})

export class OwnBankComponent implements OnInit {
  submitted = false;
  paymentFormOwn: FormGroup;
  inputs: Input[] = [
    new Input('От кого', 'ИНН или название налогоплательщика', 'from', 'Введите ИНН или название налогоплательщика'),
    new Input('БИК', 'номер БИК', 'bik', 'БИК состоит из 9 цифр'),
    new Input('Номер счета', '', 'accountNumber', 'Введите Номер счёта из 20 сиволов. '),
    new Input('Сколько', '', 'amount', 'Введите сумму в рублях')
  ];

  constructor(private fb: FormBuilder, private http: Http) { }

  ngOnInit() {
    this.paymentFormOwn = this.fb.group({
      from: ['', [<any>Validators.required, Validators.maxLength(150)]],
      bik: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      accountNumber: ['', [Validators.required, Validators.pattern(/^\d{20}$/)]],
      amount: ['', [Validators.required]],
      purpose: ['', [Validators.required]]
    });
  }

  onSubmit(form) {
    const body = new FormData();
    body.append('from', this.paymentFormOwn.get('from').value);
    body.append('bik', this.paymentFormOwn.get('bik').value);
    body.append('accountNumber', this.paymentFormOwn.get('accountNumber').value);
    body.append('amount', this.paymentFormOwn.get('amount').value);
    body.append('purpose', this.paymentFormOwn.get('purpose').value);


    this.http.post('http://localhost:5000/api/OwnBankPayment/Post',
      body, { responseType: ResponseContentType.Blob }
    )
      .subscribe(
        response => {
          const blob = response.blob;

          const downloadLink = document.createElement('a');
          downloadLink.href = window.URL.createObjectURL(blob);
          document.body.appendChild(downloadLink);
          downloadLink.setAttribute('download', 'Платежка.docx');
          downloadLink.click();
          downloadLink.parentNode.removeChild(downloadLink);
        }
      );
    this.submitted = true;
    console.log(form);
  }

  onSelectPurpose(purpose: string) {
    this.paymentFormOwn.controls['purpose'].setValue(purpose);
  }

}
