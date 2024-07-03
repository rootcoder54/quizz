import { Component, Input, OnInit } from '@angular/core';
import { Quizz } from 'src/app/shared/interface/quizz';
import { QuestionService } from 'src/app/shared/service/question.service';

@Component({
  selector: 'app-quizz-item',
  templateUrl: './quizz-item.component.html',
  styleUrls: ['./quizz-item.component.css']
})
export class QuizzItemComponent implements OnInit {

  @Input() numero: number = 1;

  @Input() question:Quizz={
    question:'',
    reponses:[],
    repondu:false,
    resultat:false,
  };

  nbreQuestion:number[]=[];


  constructor(
    private questionservice: QuestionService
  ) {}

  ngOnInit(){
  }



  selectReponse(reponse: any) {
    this.question?.reponses?.forEach((reponse) => {
      reponse.select = false;
    });
    reponse.select = true;
    this.question.repondu = true;
    if (reponse.isCorrect) {
      this.question.resultat = true;
    }
  }


  fini(){
  }

  


}
