import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }

  public saveBook(book: Book) {
    return this.http.post('http://localhost:8080/api/book', book);
  }

  public getBooks() {
    return this.http.get('http://localhost:8080/api/book');
  }
}
