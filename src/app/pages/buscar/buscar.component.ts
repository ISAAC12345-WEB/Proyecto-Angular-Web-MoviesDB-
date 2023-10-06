import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/peliculas.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit{

  texto:string = '';
  movies:Movie[] = [];
  searchQuery: string='';
  results: any[]=[]


  constructor(private router: Router,private http: HttpClient ,private activatedRoute: ActivatedRoute,private peliculasSvc:PeliculasService){}
  
  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params => {
      console.log(params['texto'])//le enviamos al parametro texto  

      this.texto = params['texto'];
      this.peliculasSvc.buscarPeliculas(this.texto).subscribe(movies=>{

        console.log(movies)
        this.movies=movies;
      })

    })
  }
  buscarTitulos() {
    if (this.searchQuery.trim() === '') {
      return; // Evitar búsquedas vacías
    }
    const apiKey = '2f9ba10fef143b94cb1bd3792c8f00af';
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${this.texto}`;
  
    this.http.get(apiUrl).subscribe((data: any) => {
      this.results = data.results;
    });
  }
  mostrarDetalles(id: number) {
    this.router.navigate(['/detalles', id]);
  }
}
