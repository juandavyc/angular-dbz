import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironMan';
  public age: number = 45;

  get capitalizedName(): string {
    return (this.name).toUpperCase();
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 17;
    //throw 'No implementado';
  }

  getHeroDescription(): string {

    return `${this.name} - ${this.age}`
  }

  resetForm(): void {
    this.name = 'ironMan';
    this.age = 45;
  }
}
