import { Component } from '@angular/core';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css'],
})
export class InfoPageComponent {
  cards: ICard[] = [
    {
      img: '../assets/img1.png',
      title: 'Enviromental Law',
      text: 'Environmental legal issues might occur since the planned business activities are designed',
    },
    {
      img: '../assets/img2.png',
      title: 'Corporate and Commercial',
      text: 'We provide a complete range of services for the continuity of your business activities.',
    },
    {
      img: '../assets/img3.png',
      title: 'Information and Technology',
      text: 'IT not followed by the existing regulation which might cause legal uncertainty and business uncertainty.',
    },
    {
      img: '../assets/img4.png',
      title: 'Other Services',
      text: 'In dealing with disruptive economic and legal challenge, our firm also provide various legal services.',
    },
  ];
}
