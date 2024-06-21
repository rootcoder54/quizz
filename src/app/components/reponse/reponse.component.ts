import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css'],
})
export class ReponseComponent {
  @Input() deactive: boolean = false;
  @Input() reponses: {
    text: string;
    isCorrect: boolean;
    select: boolean;
  } = { text: '', isCorrect: false, select: false };

}
