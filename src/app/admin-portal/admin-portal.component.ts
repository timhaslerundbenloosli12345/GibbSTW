import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrandsService } from '../../api/brands.service';

@Component({
  selector: 'app-admin-portal',
  standalone: true,
  imports: [FormsModule],  // Stellt sicher, dass FormsModule importiert ist
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent {
  // Variable zur Speicherung des Markennamens
  brandName: string = "";

  // Konstruktor injiziert den BrandsService
  constructor(private brandsService: BrandsService) {}

  // Methode zum Hinzufügen einer neuen Marke
  addBrand(): void {
    // Überprüfen, ob ein Name eingegeben wurde
    if (!this.brandName) return;

    // Verwenden des BrandsService zum Erstellen einer neuen Marke
    this.brandsService.createBrand({ name: this.brandName })
      .subscribe({
        next: (e) => this.brandName = e.name, // Erfolgsfall: Aktualisiert den Markennamen
        complete: console.info,  // Wenn die Anfrage abgeschlossen ist
        error: console.error  // Fehlerfall: Gibt den Fehler in der Konsole aus
      });
  }
}
