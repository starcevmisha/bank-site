import { Component, OnInit } from '@angular/core';
import { Input } from '../input.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Http, Request, RequestMethod} from '@angular/http';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-request-payment',
  templateUrl: './request-payment.component.html',
  styleUrls: ['./request-payment.component.css']
})
export class RequestPaymentComponent implements OnInit {
  paymentForm: FormGroup;
  inputs: Input[] = [
    new Input('ИНН получателя', 'ИНН или название налогоплательщика', 'inn', 'Введите ИНН или название налогоплательщика'),
    new Input('БИК', 'номер БИК', 'bik', 'Номер бик из 9 цифр'),
    new Input('Номер счета', '', 'accountNumber', 'Номер счета из 20 символов'),
    new Input('За что', 'Назначение платежа', 'purpose', 'Выберте ставку НДС'),
    new Input('Сколько', '', 'amount', 'Размер платежа в рублях'),
    new Input('Номер телефона', '+7', 'phoneNumber', 'Номер телефона в формате +7... и 10 цифр'),
    new Input('Эл.почта', 'Для уведомлений об оплате', 'email', 'Некорректный формат')
  ];
  constructor(private fb: FormBuilder, private http: Http) { }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      inn: ['', [<any>Validators.required, Validators.maxLength(150)]],
      bik: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      accountNumber: ['', [Validators.required, Validators.pattern(/^\d{20}$/)]],
      purpose: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\+7\d{10}$/)]],
      email: ['', [Validators.email]]
    });
  }

  onSelectPurpose(purpose: string) {
    this.paymentForm.controls['purpose'].setValue(purpose);
  }
  onSubmit(form) {
    const body = new FormData();
    body.append('inn', this.paymentForm.get('inn').value);
    body.append('bik', this.paymentForm.get('bik').value);
    body.append('accountNumber', this.paymentForm.get('accountNumber').value);
    body.append('purpose', this.paymentForm.get('purpose').value);
    body.append('amount', this.paymentForm.get('amount').value);
    body.append('phoneNumber', this.paymentForm.get('phoneNumber').value);
    body.append('email', this.paymentForm.get('email').value);


    this.http.post('http://localhost:5000/api/PaymentRequest/Post', body)
    .subscribe(
      res => {},
      err => {console.error(err); }
      );

    document.getElementById('modal-btn').click();
    form.reset();
    console.log(form);
  }
}
