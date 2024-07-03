import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';


import { v4 as uuii } from 'uuid'
/*
Aca la logica de negocios
*/


@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuii(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuii(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuii(),
      name: 'Trunks',
      power: 10
    },
    {
      id: uuii(),
      name: 'Vegueta',
      power: 7500
    }

  ];

  addCharacter(character: Character): void {

    this.characters.push({...character, id: uuii()});
  }

  deleteCharacterById(id: string) {
   // this.characters.splice(id, 1); // index

   this.characters = this.characters.filter(character => character.id !== id);
   console.log("delete", id);
  }

}
