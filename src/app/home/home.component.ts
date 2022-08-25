import { Component, OnInit } from '@angular/core';
import { Person } from './models/person';

const mockData: Person[] = [
  {
    nombre: 'Pedro',
    edad: 20,
    carrera: 'Ingeniería',
    hobbie: 'Futbol',
  },
  {
    nombre: 'Rodrigo',
    edad: 22,
    carrera: 'Arquitectura',
    hobbie: 'Bajo eléctrico',
  },
  {
    nombre: 'Romina',
    edad: 21,
    carrera: 'Abogacía',
    hobbie: 'Acrobacia',
  },
  {
    nombre: 'Ana',
    edad: 23,
    carrera: 'Contadora',
    hobbie: 'Astronomía',
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  people = mockData;

  constructor() {}

  ngOnInit(): void {}
}
