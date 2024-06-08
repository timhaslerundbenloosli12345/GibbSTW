import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home', // Der Selector, der verwendet wird, um die Komponente in HTML einzufügen
  standalone: true, // Angibt, dass diese Komponente eine Standalone-Komponente ist
  imports: [], // Gibt an, dass derzeit keine Module importiert werden
  templateUrl: './home.component.html', // Der Pfad zur HTML-Vorlage dieser Komponente
  styleUrl: './home.component.css' // Der Pfad zur CSS-Datei dieser Komponente
})
export class HomeComponent implements OnInit { // Implementiert das OnInit-Interface für Initialisierungslogik
  constructor(private router: Router) {} // Injiziert den Router-Dienst, um Navigation zu ermöglichen

  ngOnInit(): void {
  }

  // Methode, die aufgerufen wird, wenn der Einkaufs-Button geklickt wird
  btnShopingClick() {
    this.router.navigate(['/parts']); // Navigiert zur /parts Route
  }

  // Methode, die aufgerufen wird, wenn der Admin-Portal-Button geklickt wird
  btnAdminPortalClick() {
    this.router.navigate(['/adminPortal']); // Navigiert zur /adminPortal Route
  }
}

