import { Component } from '@angular/core';
import { IFeedback } from 'src/app/models/feedback';

@Component({
  selector: 'app-testimonial-page',
  templateUrl: './testimonial-page.component.html',
  styleUrls: ['./testimonial-page.component.css'],
})
export class TestimonialPageComponent {
  feedbacks: IFeedback[] = [
    {
      title: 'Incredible Experience',
      text: 'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.',
      img: './assets/fb1.png',
    },
    {
      title: 'Dependable, Responsive, Professional Partner',
      text: 'Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. ',
      img: './assets/fb2.png',
    },
  ];
}
