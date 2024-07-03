import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  // iguaL a las props de react
  @Input()
  public characterList: Character[] = [];


  onDeleteCharacter(id: string): void {
    // TODO: emit id of character
  ///  console.log(index);
   this.onDelete.emit(id);
  }
}
