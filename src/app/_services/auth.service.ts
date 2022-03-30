import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpHeaders, HttpClient} from "@angular/common/http";
import {Student} from "../student";
import {User} from "../user";


const AUTH_API = 'http://localhost:8086/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = "http://localhost:8086/api/auth/users";

  constructor(private http: HttpClient) {
  }

  login(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: { username: any; email: any; password: any; }): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseURL}`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseURL}/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object> {
    return this.http.put(`${this.baseURL}/${id}`, user);
  }
  deleteUser(id: number): Observable<Object> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
