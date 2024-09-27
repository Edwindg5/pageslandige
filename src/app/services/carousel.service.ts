import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  private series = [
    { title: 'Power Rangers Mighty Morphin', description: 'La serie original de los Power Rangers.', image: 'assets/image.jpeg' },
    { title: 'Power Rangers Zeo', description: 'Nuevos enemigos y poderes con los cristales Zeo.', image: 'assets/image2.jpeg' },
    { title: 'Power Rangers In Space', description: 'Los Power Rangers luchan contra la Alianza de los Villanos en el espacio.', image: 'assets/image3.jpeg' },
    { title: 'Power Rangers Dino Thunder', description: 'Los Power Rangers utilizan el poder de los dinosaurios para salvar el mundo.', image: 'assets/image4.jpeg' },
    { title: 'Power Rangers SPD', description: 'En el futuro, la Space Patrol Delta protege la Tierra de amenazas alienígenas.', image: 'assets/image5.jpeg' },
    { title: 'Power Rangers Samurai', description: 'Un nuevo equipo de Rangers lucha contra el mal usando el poder de los elementos.', image: 'assets/image6.jpeg' },
    { title: 'Power Rangers RPM', description: 'Un grupo de Power Rangers lucha en un futuro post-apocalíptico contra una inteligencia artificial malvada llamada Venjix.', image: 'assets/image7.jpeg' },
    { title: 'Power Rangers Ninja Steel', description: 'Los Rangers deben detener a Galvanax y proteger la energía mística del Ninja Nexus Prism.', image: 'assets/image8.jpeg' },
    { title: 'Power Rangers Time Force', description: 'Los Power Rangers viajan en el tiempo para atrapar a Ransik, un criminal mutante del futuro.', image: 'assets/image9.jpeg' },
    { title: 'Power Rangers Lost Galaxy', description: 'Un equipo de Rangers defiende una colonia espacial en su travesía hacia una nueva galaxia.', image: 'assets/image10.jpeg' },
    { title: 'Power Rangers Wild Force', description: 'Los Power Rangers utilizan el poder de los animales salvajes para proteger la Tierra de las bestias Orgs.', image: 'assets/image11.jpeg' },
    { title: 'Power Rangers Mystic Force', description: 'Los Rangers emplean magia para luchar contra una antigua fuerza del mal liberada en el mundo moderno.', image: 'assets/image12.jpeg' },
    { title: 'Power Rangers Megaforce', description: 'Un equipo de Rangers lucha contra la Armada Warstar para proteger la Tierra de invasores alienígenas.', image: 'assets/image13.jpeg' },
    { title: 'Power Rangers Beast Morphers', description: 'Un equipo de Rangers usa poderes basados en animales para luchar contra un virus de inteligencia artificial llamado Evox.', image: 'assets/image14.jpeg' },
    { title: 'Power Rangers Dino Fury', description: 'Los Dino Fury Rangers defienden la Tierra utilizando poderes ancestrales basados en dinosaurios.', image: 'assets/image15.jpeg' }
  ];

  private currentIndex = 0;

  getCurrentSeries() {
    return this.series[this.currentIndex];
  }

  getSeries() {
    return this.series;  
  }

  nextSeries() {
    this.currentIndex = (this.currentIndex + 1) % this.series.length;
    return this.getCurrentSeries();
  }

  previousSeries() {
    this.currentIndex = (this.currentIndex - 1 + this.series.length) % this.series.length;
    return this.getCurrentSeries();
  }
}
