import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/shared/interface/question';
import { Quizz } from 'src/app/shared/interface/quizz';
import { QuestionService } from 'src/app/shared/service/question.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent implements OnInit {
  numero: number = 1;
  point: number = 0;
  limit: number = 5000;
  finish: boolean = false;
  nbreQuestion:number[]=[];

  question:Quizz={
    question:'',
    reponses:[],
    repondu:false,
    resultat:false,
  };

  constructor(
    private questionservice: QuestionService
  ) {}

  ngOnInit() {
    this.listeQuestion();
    this.loadQuestion()
  }

  loadQuestion() {
    const random=this.nbreQuestion[this.numero-1];
    this.questionservice.getById(random).subscribe((data) => {
      this.question={
        question:'-' + data.question,
        reponses:data.options,
        repondu:false,
        resultat:false,    
      };
    });
  }

  nextQuestion() {
    this.numero++;
    this.loadQuestion()
  }

  fini() {
    this.finish = true;
  }

  appreciation(){
    if(this.point<5){
      return "Oups! Vous avez échoué";
    }else if(this.point<7){
      return "Pas Mal";
    }else if(this.point<9){
      return "Bravo! Vous avez réussi";
    }else{
      return "Exellent! Vous avez réussi avec brio";
    }
  }


  alert(){
    if(this.limit<20){
      return true;
    }
    return false;
  }

  listeQuestion(){
    const uniqueNumbers = new Set<number>();
    while (uniqueNumbers.size < 10) {
        uniqueNumbers.add(Math.floor(Math.random() * (13 - 1 + 1)) + 1);
    }
    this.nbreQuestion=Array.from(uniqueNumbers);
  }

}
