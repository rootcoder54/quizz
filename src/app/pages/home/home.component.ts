import { Component } from '@angular/core';
import { QuizzService } from 'src/app/shared/service/quizz.service';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nbre:number=5;
  limit:number=5;

  constructor(private quizzService:QuizzService,private router: Router){}
  onSubmit(){
    const uniqueId = uuidv4();
    const data={id:uniqueId,point:0,limit:this.limit,nombre:this.nbre, user_id:5}
    this.quizzService.create(data).subscribe(
      (response) => {
        console.log('Données envoyées avec succès :', response);
        this.router.navigate(['/quizz']);
      },
      (error) => {
        console.error('Erreur lors de l\'envoi des données :', error);
      }
    );
  }
}
