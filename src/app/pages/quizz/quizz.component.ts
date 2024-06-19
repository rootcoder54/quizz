import { Component } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {
  repondu: boolean = false;
  reponses=[
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

  valide(){
    
  }
}
