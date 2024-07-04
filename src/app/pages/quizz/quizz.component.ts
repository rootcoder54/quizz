import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quizz } from 'src/app/shared/interface/quizz';
import { QuestionService } from 'src/app/shared/service/question.service';
import { QuizzService } from 'src/app/shared/service/quizz.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent implements OnInit {

  quizz:Quizz={id:"",limit:50,point:0,nombre:5,pseudo:""};

  numero: number = 1;

  finish: boolean = false;
  nbreQuestion:number[]=[];
  width: number = 0; 

  question:{
    question:string;
    reponses?: { text: string; isCorrect: boolean; select: boolean; }[];
    repondu: boolean;
    resultat: boolean;
}   ={
    question:'',
    reponses:[],
    repondu:false,
    resultat:false,
  };

  constructor(
    private questionservice: QuestionService, private route: ActivatedRoute,private quizzService:QuizzService,private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id){
        this.quizzService.getQuizzesId(id).subscribe(d => {
          this.quizz=d;
          this.listeQuestion();
          this.loadQuestion();
          this.startProgress();
        })
      }
      else{
        this.router.navigate(['/home']);
      }
    });
  }

  listeQuestion(){
    const uniqueNumbers = new Set<number>();
    while (uniqueNumbers.size < this.quizz.nombre) {
        uniqueNumbers.add(Math.floor(Math.random() * (13)) + 1);
    }
    this.nbreQuestion=Array.from(uniqueNumbers);
  }

  loadQuestion() {
    const random=this.nbreQuestion[this.numero-1];
    this.questionservice.getById(random).subscribe((data) => {
      this.question={
        question:this.numero+'-' + data.question,
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
    if(this.quizz.point<5){
      return "Oups! Vous avez échoué";
    }else if(this.quizz.point<7){
      return "Pas Mal";
    }else if(this.quizz.point<9){
      return "Bravo! Vous avez réussi";
    }else{
      return "Exellent! Vous avez réussi avec brio";
    }
  }

  alert(){
    if(this.width>75){
      return true;
    }
    return false;
  }

  startProgress() {
    const startTime = Date.now();
    const limit=this.quizz.limit *1000
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      this.width = (elapsedTime / limit) * 100;
      if (elapsedTime >= limit) {
        this.width = 100; 
        clearInterval(interval);
        this.fini()
      }
    }, 50); 
  }

}
