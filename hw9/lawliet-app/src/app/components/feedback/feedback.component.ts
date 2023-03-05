import { Component, Input } from '@angular/core';
import { IFeedback } from 'src/app/models/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  @Input() feedback: IFeedback | undefined;
}
