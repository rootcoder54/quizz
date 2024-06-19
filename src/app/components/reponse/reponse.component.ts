import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css'],
})
export class ReponseComponent {
  @Input() deactive: boolean = false;
  @Input() reponses: any[] = [];


  selectReponse(reponse: any) {
    this.reponses.forEach((reponse: any) => {
      reponse.selected = false;
    });
    reponse.selected = true;
    this.deactive = true;
  }

  selectColor(reponse: any) {
    if (reponse.selected) {
      if (reponse.isCorrect) {
        return 'bg-green-400 hover:bg-green-400 text-white';
      } else {
        return 'bg-red-500 hover:bg-red-500 text-white';
      }
    }
    return '';
  }
}
