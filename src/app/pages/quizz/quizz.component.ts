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
  liste:number[]=[];
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
        uniqueNumbers.add(Math.floor(Math.random() * (25)) + 1);
    }
    this.liste=Array.from(uniqueNumbers);
  }

  loadQuestion() {
    const random=this.liste[this.numero-1];
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

  reponse(){
    this.quizz.point++
  }

  fini() {
    this.quizzService.updateQuiz(this.quizz.id,this.quizz).subscribe(
      (response) => {
        console.log('Données envoyées avec succès :', response);
      },
      (error) => {
        console.error('Erreur lors de l\'envoi des données :', error);
      },
      () => {
        this.router.navigate(['resultat',this.quizz.id])
      }
    );
    this.finish = true;
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
