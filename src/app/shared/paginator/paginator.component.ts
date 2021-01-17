import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  // TODO: make sure we receive this value from the parent component
  numberOfPages = 5;
  currentPage = 1;
  pageOptions: number[];

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.pageOptions = [
      this.currentPage - 2,
      this.currentPage - 1,
      this.currentPage,
      this.currentPage + 1,
      this.currentPage + 2
    ].filter(pageNumber => pageNumber >= 1 && pageNumber <= this.numberOfPages);
  }

  ngOnInit() {}
 
  changePage(page) {
    this.currentPage = page;
    this.change.emit(this.currentPage);
  }
}
