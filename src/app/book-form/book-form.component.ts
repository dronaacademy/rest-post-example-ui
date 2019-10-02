import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  book = new Book();
  constructor(private bookService: BookServiceService) {}
  message: string;

  ngOnInit() {
  }

  public onSubmit($event) {
    this.bookService.saveBook(this.book).subscribe(response=>{
      this.message = response['message'];
    });
  }
}
