import { Component } from '@angular/core';
import { PopularResponse } from './interfaces/peliculas.interface';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Movie';
  name = 'Isaac';

  constructor(private peliculasP:PeliculasService){
    this.peliculasP.getPeliculas().subscribe((res)=>{
      console.log(res);
    }
      )
    
  }

}
