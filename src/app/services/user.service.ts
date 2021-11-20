import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { User } from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackbar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',      
    })
  }

  read(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl);
  }

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl, user)
  }


}
