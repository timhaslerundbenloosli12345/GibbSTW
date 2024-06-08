import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../api/auth.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Credential } from '../api/models/credentials.model';
import { Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true, // Standalone-Komponente
  imports: [FormsModule, CommonModule], // Importierte Module
  templateUrl: './login.component.html', // Template-URL
  styleUrl: './login.component.css' // Style-URL
})
export class LoginComponent implements OnDestroy {

  private destroy$ = new Subject<void>();

  // Variablen für Email und Passwort
  protected password: string = "";
  protected email: string = "";

  constructor(private authService: AuthService, private router: Router) {}

  // OnDestroy Lifecycle-Hook
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Methode zum Absenden des Formulars
  protected onSubmit(): void {
    const credential: Credential = { username: this.email, password: this.password };

    console.log(credential);

    // Authentifizierung durchführen
    this.authService.signIn(credential)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        // Bei erfolgreicher Anmeldung Token setzen und zur Startseite navigieren
        this.authService.setToken(res);
        console.log(res);
        this.router.navigate(["/home"]);
      });
  }
}
