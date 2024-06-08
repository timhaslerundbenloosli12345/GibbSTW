import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandCreate } from './models/brand-create.model';
import { BrandGet } from './models/brand-get.model';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  // Die Basis-URL der API
  private apiUrl = 'http://localhost:8080/api';

  // Der Konstruktor injiziert den HttpClient-Dienst
  constructor(private http: HttpClient) { }

  // Ruft eine Liste aller Marken ab
  getBrands(): Observable<BrandGet[]> {
    // Token aus dem localStorage abrufen
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();

    // Wenn ein Token vorhanden ist, zum Header hinzufügen
    if (token) {
      headers = headers.set('authentication', token);
    }

    // GET-Anfrage an die API, um alle Marken abzurufen
    return this.http.get<BrandGet[]>(`${this.apiUrl}/brands`, { headers });
  }

  // Ruft eine bestimmte Marke nach ihrer ID ab
  getBrandById(id: string): Observable<BrandGet> {
    // GET-Anfrage an die API, um eine Marke nach ID abzurufen
    return this.http.get<BrandGet>(`${this.apiUrl}/brands/${id}`);
  }

  // Erstellt eine neue Marke
  createBrand(brandData: any): Observable<BrandGet> {
    // Token aus dem localStorage abrufen
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();

    // Wenn ein Token vorhanden ist, zum Header hinzufügen
    if (token) {
      headers = headers.set('authentication', token);
    }

    // POST-Anfrage an die API, um eine neue Marke zu erstellen
    return this.http.post<BrandCreate>(`${this.apiUrl}/brands`, brandData, { headers });
  }

  // Aktualisiert eine bestehende Marke nach ihrer ID
  updateBrand(id: string, updatedData: any): Observable<BrandGet> {
    // PATCH-Anfrage an die API, um eine bestehende Marke zu aktualisieren
    return this.http.patch<BrandCreate>(`${this.apiUrl}/brands/${id}`, updatedData);
  }

  // Löscht eine Marke nach ihrer ID
  deleteBrand(id: string): Observable<void> {
    // DELETE-Anfrage an die API, um eine Marke zu löschen
    return this.http.delete<void>(`${this.apiUrl}/brands/${id}`);
  }
}
