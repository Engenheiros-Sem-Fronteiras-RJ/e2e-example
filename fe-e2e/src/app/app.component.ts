import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  // Just for study case, the better way is to put it in service folder
  constructor(private http: HttpClient) {}

  onClick() {
    this.getTitle().subscribe(title => {
      this.title = title
    })
  }

  private getTitle(): Observable<any> {
    return this.http.get<any>('/api')
      .pipe(
        map(res => {
          return res.message
        }),
        catchError(err => {
          return throwError(err); 
        })
      )
  }
}
