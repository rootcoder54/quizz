import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import JSConfetti from 'js-confetti';
import { Quizz } from 'src/app/shared/interface/quizz';
import { QuizzService } from 'src/app/shared/service/quizz.service';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css'],
})
export class ResultatComponent {
  quizz: Quizz = { id: '', limit: 50, point: 0, nombre: 5, pseudo: '' };

  constructor(
    private route: ActivatedRoute,
    private quizzService: QuizzService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.quizzService.getQuizzesId(id).subscribe((d) => {
          this.quizz = d;
          const jsConfetti = new JSConfetti();
          jsConfetti.addConfetti();
        });
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

  appreciation() {
    const note = this.quizz.point / this.quizz.nombre;
    if (note < 0.3) {
      return 'Oups! Vous avez échoué';
    } else if (note < 0.6) {
      return 'Pas Mal';
    } else if (note < 0.8) {
      return 'Bravo! Vous avez réussi';
    } else {
      return 'Exellent! Vous avez réussi avec brio';
    }
  }
}
