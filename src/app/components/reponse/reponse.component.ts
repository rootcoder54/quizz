import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css'],
})
export class ReponseComponent {
  @Input() deactive: boolean = false;
  @Input() reponses: {
    reponse: string;
    isCorrect: boolean;
    selected: boolean;
  } = { reponse: '', isCorrect: false, selected: false };

}
