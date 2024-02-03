import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})


export class FilterBarComponent {

  emojis = [
    { pt: "Todas", en: "All" },
    { pt: "Carinhas", en: "smileys-and-people" },
    { pt: "Bandeiras", en: "flags" },
    { pt: "Símbolos", en: "symbols" },
    { pt: "Objetos", en: "objects" },
    { pt: "Atividades", en: "activities" },
    { pt: "Viagens e Lugares", en: "travel-and-places" },
    { pt: "Comidas e Bebidas", en: "food-and-drink" },
    { pt: "Animais e Natureza", en: "animals-and-nature" },
  ];
}
