import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from '../shared/types';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})


export class FilterBarComponent {

  categories = [
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
  @Output() sendCategory = new EventEmitter<Category>();

  selectCategory(categoria: Category) {
    this.sendCategory.emit(categoria);
  }
}
