import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { DetallesPeliculaComponent } from './pages/detalles-pelicula/detalles-pelicula.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'buscar/:texto', component: BuscarComponent},
  {path:'pelicula/:id', component: PeliculaComponent},
  {path:'detalles/:id', component: DetallesPeliculaComponent },

  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path:'err', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
