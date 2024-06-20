import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit{
  repondu: boolean = false;
  resultat: boolean = false;
  numero:number = 1;
  point:number = 0;

  question: string = 'Quelle est la superficie du Mali ?';
  reponses:any[]=[]

  ngOnInit() {
    this.loadQuestion();
  }

  loadQuestion(){
    this.question = this.numero+'- Quelle est la superficie du Mali ?';
    this.reponses=[
      {
        reponse: 'La superfice est de 500 652 km2',
        isCorrect: false,
        selected: false,
      },
      {
        reponse: 'La superfice est de 1 241 244 km2',
        isCorrect: true,
        selected: false,
      },
      {
        reponse: 'La superfice est de 1 000 520 km2',
        isCorrect: false,
        selected: false,
      },
      {
        reponse: 'La superfice est de 1 241 421 km2',
        isCorrect: false,
        selected: false,
      },
    ]
  }

  selectReponse(reponse: any) {
    this.reponses.forEach((reponse: any) => {
      reponse.selected = false;
    });
    reponse.selected = true;
    this.repondu = true;
    if (reponse.isCorrect) {
      this.resultat = true;
      this.point=this.point+1;
    }
    console.log(this.resultat,this.repondu);
  }

  nextQuestion(){
    this.resultat = false;
    this.repondu = false;
    this.numero = this.numero + 1;
    this.loadQuestion();
  }
  fini(){
    
  }
}
