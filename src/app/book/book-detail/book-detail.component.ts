import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
// import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'ws-book-detail',
  templateUrl: 'book-detail.component.html'
})
export class BookDetailComponent implements OnInit {
  public book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookDataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: { isbn: string }) => {
      this.bookService
        .getBookByIsbn(params.isbn)
        .subscribe(book => (this.book = book));
    });

    /*
     this.route.params.mergeMap((params: { isbn: string }) => this.bookService.getBookByIsbn(params.isbn))
     .subscribe(book => this.book = book);
     */
  }
}
