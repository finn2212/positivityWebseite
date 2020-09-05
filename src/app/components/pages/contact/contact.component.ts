import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import 'src/assets/js/smtp.js'
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
