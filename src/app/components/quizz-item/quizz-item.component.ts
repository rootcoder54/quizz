import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionService } from 'src/app/shared/service/question.service';

@Component({
  selector: 'app-quizz-item',
  templateUrl: './quizz-item.component.html',
  styleUrls: ['./quizz-item.component.css']
})
export class QuizzItemComponent implements OnInit {

  @Input() question:{
    question:string;
    reponses?: { text: string; isCorrect: boolean; select: boolean; }[];
    repondu: boolean;
    resultat: boolean;
}={
    question:'',
    reponses:[],
    repondu:false,
    resultat:false,
  };

  @Output() private select: EventEmitter<any> =
    new EventEmitter<any>();

    selectReponse(reponse:any) {
      this.question?.reponses?.forEach((reponse) => {
        reponse.select = false;
      });
      reponse.select = true;
      this.question.repondu = true;
      if (reponse.isCorrect) {
        this.question.resultat = true;
        this.select.emit(reponse);
      }
    }

  ngOnInit(){
  }

  selectReponseq(reponse: any) {
    this.question?.reponses?.forEach((reponse) => {
      reponse.select = false;
    });
    reponse.select = true;
    this.question.repondu = true;
    if (reponse.isCorrect) {
      this.question.resultat = true;
    }
  }

}
