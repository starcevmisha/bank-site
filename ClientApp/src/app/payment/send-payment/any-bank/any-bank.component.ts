import { Component, OnInit,  } from '@angular/core';
import { Directive, HostListener } from '@angular/core';
import { CreditCardValidator, CreditCard } from 'angular-cc-library';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Http, Request, RequestMethod} from '@angular/http';
@Component({
  selector: 'app-any-bank',
  templateUrl: './any-bank.component.html',
  styleUrls: ['./any-bank.component.css']
})
export class AnyBankComponent implements OnInit {
  paymentForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private http: Http) { }



  ngOnInit() {
    this.paymentForm = this.fb.group({
      creditCard: ['', [Validators.required, <any>CreditCardValidator.validateCCNumber]],
      expirationDate: ['', [Validators.required, <any>CreditCardValidator.validateExpDate]],
      cvc: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
      comment: ['', [<any>Validators.maxLength(150)]],
      sum: ['', [<any>Validators.required, Validators.max(75000), Validators.min(1000)]],
      email: ['', [<any>Validators.email]]
    });
  }
  onSubmit(form) {
    document.getElementById('modal-btn').click();
    const body = new FormData();
    body.append('creditCard', this.paymentForm.get('creditCard').value);
    body.append('expirationDate', this.paymentForm.get('expirationDate').value);
    body.append('cvc', this.paymentForm.get('cvc').value);
    body.append('comment', this.paymentForm.get('comment').value);
    body.append('sum', this.paymentForm.get('sum').value);
    body.append('email', this.paymentForm.get('email').value);


    this.http.post('http://localhost:5000/api/CardPayment/Post', body)
    .subscribe(
      res => console.log(res.json()),
      err => {console.error(err); }
      );
    this.submitted = true;
    console.log(form);
    
    form.reset();

  }
}


