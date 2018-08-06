import { Component, OnInit } from '@angular/core';
import { IChronologyEvent } from 'ngx-chronology';



@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})

export class RoadmapComponent implements OnInit {

    title: string;
    icon?: string;
    faLibrary: 'far' | 'fas' | 'fab';
    content: string;

    events: Array<IChronologyEvent> = [
      {
         title: 'SEPTIEMBRE 2018',
         icon: 'check-circle',
         faLibrary: 'far',
         content: `Our Pre-Sale Launches on Sep. 19.`,
      },
      {
         title: 'DECEMBER 2018',
         icon: 'rocket',
         faLibrary: 'fas',
         content: `Our Public Crowdsale launches on Dec. 1.`,
      },
      {
         title: 'JANUARY 2019',
         icon: 'hotel',
         faLibrary: 'fas',
         content: `Everyday people begin seeking and completing reservations on Destiniva using their Destiniva Tokens,
         DST are traded on exchanges, Destiniva-ATMs are introduced in the Caribbean`,
      },
      {
         title: 'Q2-2019',
         icon: 'money-bill-alt',
         faLibrary: 'far',
         content: `DestinivaX and Destiniva PAY development.`,
      },
      {
        title: 'Q3-2019',
        icon: 'globe-africa',
        faLibrary: 'fas',
        content: ` * Destiniva-ATMs are introduced in the US, Europe, Africa, and Asia
        * destinivaX and Destiniva PAY go live.`,
     },
     {
      title: 'Q4-2019',
      icon: 'store',
      faLibrary: 'fas',
      content: ` Destiniva Tokens are utilized in all of our platforms as well as accepted by thousands of merchants.`,
   },
   ];

  constructor() { }

  ngOnInit() {
  }

}
