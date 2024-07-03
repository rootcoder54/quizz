import { Component, Input, OnInit } from '@angular/core';
import { Quizz } from 'src/app/shared/interface/quizz';
import { QuestionService } from 'src/app/shared/service/question.service';

@Component({
  selector: 'app-quizz-item',
  templateUrl: './quizz-item.component.html',
  styleUrls: ['./quizz-item.component.css']
})
export class QuizzItemComponent implements OnInit {

  @Input() point: number = 0;

  @Input() limit:number=20000;

  numero: number = 1;

  width: number = 0; 

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
    this.startProgress()
  }



  selectReponse(reponse: any) {
    this.question?.reponses?.forEach((reponse) => {
      reponse.select = false;
    });
    reponse.select = true;
    this.question.repondu = true;
    if (reponse.isCorrect) {
      this.question.resultat = true;

      this.point = this.point + 1;
    }
  }


  fini(){
    this.width=0;
  }

  startProgress() {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      this.width = (elapsedTime / this.limit) * 100;
      if (elapsedTime >= this.limit) {
        this.width = 100; 
        clearInterval(interval);
        this.fini()
      }
    }, 50); 
  }

  alert(){
    if(this.width>75){
      return true;
    }
    return false;
  }

}
