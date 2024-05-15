import { Component } from '@angular/core';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-message-template',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './message-template.component.html',
  styleUrl: './message-template.component.scss',
})
export class MessageTemplateComponent {
  active = 1;
}
