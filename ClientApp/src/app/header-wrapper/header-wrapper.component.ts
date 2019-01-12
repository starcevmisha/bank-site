import { Component, OnInit } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-wrapper',
  templateUrl: './header-wrapper.component.html',
  styleUrls: ['./header-wrapper.component.css']
})
export class HeaderWrapperComponent implements OnInit {
  constructor(private jwtHelper: JwtHelper,private router: Router) {
  }
  getName() {
    const token = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return this.jwtHelper.decodeToken(token)['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    }
  }
  ngOnInit() {
  }
  logOut() {
    localStorage.removeItem('jwt');
    this.router.navigate(['/']);
 }
 logIn() {
  this.router.navigate(['/login']);
}
}
