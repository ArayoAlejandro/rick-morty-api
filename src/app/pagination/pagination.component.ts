import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  disabledPrevious = false
  disabledNext = false
  @Input() page: any
  @Input() pages: any
 
  getNextPage() {    
    if (this.page > this.pages) {
      return this.pages
    }
    return Number(this.page) + 1
  }

  getPrevPage() {
    if (this.page < 1) {
      return 1
    }
    return Number(this.page) - 1
  }

}
