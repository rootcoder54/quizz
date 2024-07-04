import { Component, OnInit } from '@angular/core';
import { Quizz } from 'src/app/shared/interface/quizz';
import { QuizzService } from 'src/app/shared/service/quizz.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  quizz:Quizz[]=[];
  constructor(private quizzService:QuizzService){}

  ngOnInit(){
    this.quizzService.getQuizzes().subscribe(q => {
      this.quizz=q;
    })
  }
}
