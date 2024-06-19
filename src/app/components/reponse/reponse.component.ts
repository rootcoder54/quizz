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

  selectColor() {
    if (this.reponses.selected) {
      if (this.reponses.isCorrect) {
        return 'bg-green-400 hover:bg-green-400 text-white';
      } else {
        return 'bg-red-500 hover:bg-red-500 text-white';
      }
    }
    return '';
  }
}
