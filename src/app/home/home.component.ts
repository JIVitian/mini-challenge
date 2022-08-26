import { Component, OnInit } from '@angular/core';
import { mockData } from './data/mockData';
import { Person } from './models/person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  people:Person[] = mockData;
  headers: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.headers = Object.keys(this.people[0]);
  }
}
