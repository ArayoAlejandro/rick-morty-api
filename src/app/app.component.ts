import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CardCharacterComponent } from './card-character/card-character.component';
import { RickMortyService } from './services/rick-morty.service';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardCharacterComponent, FormsModule, PaginationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(private request: RickMortyService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      let page = params['page']
      if (page >= 1 && page <= 42) {
        this.getAllCharacters(page)
      } else {
        this.getAllCharacters(1)
      }
    })

  }

  character: any[] = []
  pages: any;
  page: any

  getAllCharacters = (page: any) => {
    if (page === undefined) return
    this.request.getAllCharacter(page).subscribe({
      next: (res: any) => {
        this.character = []
        this.pages = Number(res.info.pages)
        this.page = Number(page)
        const char = res.results
        char.forEach((element: any) => {
          this.character.push({ name: element.name, gender: element.gender, image: element.image, id: element.id })

        });
      }
    })
  }
}
