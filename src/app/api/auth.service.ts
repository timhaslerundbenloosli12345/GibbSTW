import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credential } from './models/credentials.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Die Basis-URL der API
  private apiUrl = 'http://localhost:8080/api';

  // Der Konstruktor injiziert den HttpClient-Dienst
  constructor(private http: HttpClient) { }

  // Methode zum Anmelden eines Benutzers
  // Akzeptiert Anmeldeinformationen und gibt einen Observable-String zurück (das Token)
  signIn(credential: Credential): Observable<string> {
    // POST-Anfrage an die API zur Anmeldung
    return this.http.post<string>(`${this.apiUrl}/auth/sign-in`, credential);
  }

  // Methode zum Speichern des Tokens im localStorage
  setToken(token: string): void {
    // Speichert das Token im localStorage
    localStorage.setItem('token', token);
  }
}
