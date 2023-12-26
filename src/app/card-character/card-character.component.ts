import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [],
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.css'
})
export class CardCharacterComponent {
  @Input() image = ""
  @Input() name = ""
  @Input() gender = ""

}
