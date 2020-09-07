import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SnotifyService } from 'ng-snotify';
import 'src/assets/js/smtp.js'

import { NgForm } from '@angular/forms';
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
  onSubmit() {

    console.log('email')

    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'info@positivitiytogo.com',
      Password: '9281D82E2787CCBFDF874FE8D7F082BAA1EB74BACEF92DFA68AC41F352D814D3C86BF9AA670D364B6540E8085F7EEEF3',
      To: 'info@positivitiytogo.com',
      From: 'udith.indrakantha@gmail.com',
      Subject: 'Hello',
      Body: 'helo'
    }).then(message => { alert(message); });

  }

}