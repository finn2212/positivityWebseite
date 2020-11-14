import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer3',
  templateUrl: './footer3.component.html',
  styleUrls: ['./footer3.component.css']
})
export class Footer3Component implements OnInit {
  myFlagForButtonToggle = true;
  constructor(public translate: TranslateService) { }
  onToggleGroupChange($event) {
    this.translate.use($event.value)
    console.log($event)
  }
  ngOnInit(): void {
  }

}
