import { Component } from '@angular/core';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-series',
  standalone: true,
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent {
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
