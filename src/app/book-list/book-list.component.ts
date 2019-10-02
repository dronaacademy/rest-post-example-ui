import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public books;

  constructor(private bookService: BookServiceService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(response=>{
      this.books = response;
    });
  }

}
