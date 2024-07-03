import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  nbre:number=5;
  limit:number=5
  onSubmit(){
    console.log(this.nbre,this.limit)
  }
}
