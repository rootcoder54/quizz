import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/shared/service/question.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent implements OnInit {
  repondu: boolean = false;
  resultat: boolean = false;
  numero: number = 1;
  point: number = 0;
  limit: number = 50;
  test: any = '';
  finish: boolean = false;

  question: string = 'Quelle est la superficie du Mali ?';
  reponses?: { text: string; isCorrect: boolean; select: boolean; }[];

  constructor(
    private router: Router,
    private questionservice: QuestionService
  ) {}

  ngOnInit() {
    this.loadQuestion();
    this.time();
    this.test=this.questionservice.getById(this.numero);
  }

  time() {
    let timer = setInterval(() => {
      this.limit = this.limit - 1;
      if (this.limit == 0) {
        clearInterval(timer);
        this.fini();
      }
    }, 1000);
  }

  loadQuestion() {
    const random=Math.floor(Math.random() * (23 - 1 + 1)) + 1;
    this.question = this.numero + '-' + this.questionservice.getById(random)?.question;
    this.reponses = this.questionservice.getById(random)?.options;
  }

  selectReponse(reponse: any) {
    this.reponses?.forEach((reponse) => {
      reponse.select = false;
    });
    reponse.select = true;
    this.repondu = true;
    if (reponse.isCorrect) {
      this.resultat = true;
      this.point = this.point + 1;
    }
    console.log(this.resultat, this.repondu);
  }

  nextQuestion() {
    this.resultat = false;
    this.repondu = false;
    this.numero = this.numero + 1;
    this.loadQuestion();
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

}
