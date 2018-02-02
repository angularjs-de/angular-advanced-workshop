import { Component, Input, OnInit } from '@angular/core'
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Book } from '../shared/book';

@Component({
  selector: "book-preview",
  templateUrl: "./book-preview.component.html",
  styleUrls: ["./book-preview.component.scss"]
})
export class BookPreviewComponent implements OnInit, OnChanges {
  @Input() book: Book;
  btnId: string;

  constructor() { }

  ngOnInit() {
    this.btnId = 'details_' + this.book.isbn
  }

  trigger() {
    //this.cdr.detectChanges()
  }


  ngOnChanges(changes) {
    console.warn('-->', changes)
  }
}