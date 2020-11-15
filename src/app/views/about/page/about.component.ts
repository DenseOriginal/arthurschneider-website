import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/shared/intefaces/customer';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  customers: ICustomer[] = [
    {
      name: 'Morten Krog Kristensen',
      company: 'Fatamo ApS, Danmark',
      imgPath: 'http://arthurschneider.com/images/about/123027467_705158070129893_4716772848149801879_n.jpg',
      quote: "ARTHUR HAR LAVET FLERE VIDEOER FOR MIG. HAN HAR I ALLE TILFÆLDE VÆRET HURTIG, FAIR OG EFFEKTIV. JEG SYNES AT VIDEOERNE HAR LEVET OP TIL DEN KVALITET JEG HAR EFTERSPURT. PRISSÆTNING HAR VÆRET FAIR OG JEG FØLER AT JEG FÅR GOD VÆRDI FOR MINE PENGE."
    },
    {
      name: 'Marco Fässler, Gründer RYGnow, Schweiz',
      company: 'Fatamo ApS, Danmark',
      imgPath: 'http://arthurschneider.com/images/about/4034c5de-7cdb-4e4a-9efa-b8143803ce18.jpg',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
