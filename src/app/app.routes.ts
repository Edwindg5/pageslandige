import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SeriesComponent } from './component/series/series.component';
import { PersonajesComponent } from './component/personajes/personajes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'personajes', component: PersonajesComponent }
];
