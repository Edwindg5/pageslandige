import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule, CardComponent], 
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent {
  characters = [
    { title: 'Jason Lee Scott', description: 'Ranger Rojo', image: '/assets/jason.jpeg', hoverColor: 'rgba(255, 0, 0, 0.7)' },
    { title: 'Kimberly Ann Hart', description: 'Ranger Rosa', image: '/assets/kimberly.jpeg', hoverColor: 'rgba(255, 192, 203, 0.7)' },
    { title: 'Zack Taylor', description: 'Ranger Negro', image: '/assets/zack.jpeg', hoverColor: 'rgba(0, 0, 0, 0.7)' },
    { title: 'Trini Kwan', description: 'Ranger Amarillo', image: '/assets/trini.jpeg', hoverColor: 'rgba(255, 255, 0, 0.7)' },
    { title: 'Billy Cranston', description: 'Ranger Azul', image: '/assets/billy.jpeg', hoverColor: 'rgba(0, 0, 255, 0.7)' },
    { title: 'Tommy Oliver', description: 'Ranger Verde', image: '/assets/tommy.jpeg', hoverColor: 'rgba(0, 128, 0, 0.7)' }
  ];
}
