import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesComponent } from '../personajes/personajes.component';
import { SeriesComponent } from '../series/series.component';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PersonajesComponent, SeriesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  characters = [
    { title: 'Jason Lee Scott', description: 'Ranger Rojo', image: '/assets/jason.jpeg' },
    { title: 'Kimberly Ann Hart', description: 'Ranger Rosa', image: '/assets/kimberly.jpeg' },
    { title: 'Zack Taylor', description: 'Ranger Negro', image: '/assets/zack.jpeg' },
    { title: 'Trini Kwan', description: 'Ranger Amarillo', image: '/assets/trini.jpeg' },
    { title: 'Billy Cranston', description: 'Ranger Azul', image: '/assets/billy.jpeg' },
    { title: 'Tommy Oliver', description: 'Ranger Verde', image: '/assets/tommy.jpeg' }
  ];

  series: any[] = [];
  currentSeriesIndex = 0;
  isTransitioning = false;

  constructor(private carouselService: CarouselService) {
    this.series = this.carouselService.getSeries();
  }

  get currentSeries() {
    return this.series[this.currentSeriesIndex];
  }

  previous() {
    if (!this.isTransitioning) {
      this.isTransitioning = true;
      setTimeout(() => {
        this.currentSeriesIndex = (this.currentSeriesIndex - 1 + this.series.length) % this.series.length;
        this.isTransitioning = false;
      }, 500);
    }
  }

  next() {
    if (!this.isTransitioning) {
      this.isTransitioning = true;
      setTimeout(() => {
        this.currentSeriesIndex = (this.currentSeriesIndex + 1) % this.series.length;
        this.isTransitioning = false;
      }, 500);
    }
  }
}
