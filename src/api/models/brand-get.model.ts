export class BrandGet {
  // Die eindeutige Identifikationsnummer der Marke
  id: string;

  // Der Name der Marke
  name: string;

  // Konstruktor zum Initialisieren einer neuen BrandGet-Instanz
  constructor(id: string, name: string) {
    // Initialisiert die id-Eigenschaft mit dem übergebenen Wert
    this.id = id;

    // Initialisiert die name-Eigenschaft mit dem übergebenen Wert
    this.name = name;
  }
}
