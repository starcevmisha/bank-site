import {Component, OnInit} from '@angular/core';

import {CompanyInfo} from "./company-info.model";

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  //TODO в будущем получать информацию из чегототам по инн или названию
  company: CompanyInfo = new CompanyInfo("1",
    "Индивидуальный предприниматель Старцев Михаил",
    "+79122219868", "starcev.ru", "starcev_misha@mail.ru",
    "https://www.stihi.ru/pics/2015/01/23/7785.gif");


  constructor() {
  }

  ngOnInit() {
  }

}
