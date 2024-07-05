import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizzComponent } from './pages/quizz/quizz.component';
import { HistoriqueComponent } from './pages/historique/historique.component';
import { ResultatComponent } from './pages/resultat/resultat.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'quizz/:id', component: QuizzComponent },
  { path:'historique', component:HistoriqueComponent},
  { path:'resultat/:id', component:ResultatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
