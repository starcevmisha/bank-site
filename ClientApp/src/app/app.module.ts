import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataTableModule } from '@pascalhonegger/ng-datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { HttpModule } from '@angular/http';

import { JwtHelper } from 'angular2-jwt'

import { AppComponent } from './app.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { PaymentComponent } from './payment/payment.component';
import { AnyBankComponent } from './payment/send-payment/any-bank/any-bank.component';
import { HeaderWrapperComponent } from './header-wrapper/header-wrapper.component';
import { BodyWrapperComponent } from './body-wrapper/body-wrapper.component';
import { OwnBankComponent } from './payment/send-payment/own-bank/own-bank.component';
import { SendPaymentComponent } from './payment/send-payment/send-payment.component';
import { RequestPaymentComponent } from './payment/request-payment/request-payment.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { PaymentTableComponent } from './admin-panel/payment-table/payment-table.component';
import { RequestTableComponent } from './admin-panel/request-table/request-table.component';
import { AuthGuard } from './guard.service';

import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FetchDataComponent,
    CompanyInfoComponent,
    PaymentComponent,
    AnyBankComponent,
    HeaderWrapperComponent,
    BodyWrapperComponent,
    OwnBankComponent,
    SendPaymentComponent,
    RequestPaymentComponent,
    AdminPanelComponent,
    PaymentTableComponent,
    RequestTableComponent,
    ModalComponent,
    RequestPaymentComponent,
    LoginComponent,

  ],
  imports: [
    DataTableModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CreditCardDirectivesModule,
    HttpModule,
    BrowserAnimationsModule,


    RouterModule.forRoot([
      { path: '', component: BodyWrapperComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [JwtHelper, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
