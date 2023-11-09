import { Component } from '@angular/core';
import { Hero } from './heroes/shared/hero';

const HEROES: Hero[] = [
  {id: 11, name: 'name 11'},
  {id: 12, name: 'name 12'},
  {id: 13, name: 'name 13'},
  {id: 14, name: 'name 14'},
  {id: 15, name: 'name 15'},
  {id: 16, name: 'name 16'},
  {id: 17, name: 'name 17'},
  {id: 18, name: 'name 18'},
  {id: 19, name: 'name 19'},
  {id: 20, name: 'name 20'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  heroes = HEROES;

  selectedHero!: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
