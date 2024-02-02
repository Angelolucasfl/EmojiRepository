import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})


export class FilterBarComponent {
  categories = {
    "smileys-and-people": "Carinhas",
    "flags": "Bandeiras",
    "symbols": "Símbolos",
    "objects": "Objetos",
    "activities": "Atividades",
    "travel-and-places": "Viagens e Lugares",
    "food-and-drink": "Comidas e Bebidas",
    "animals-and-nature": "Animais e Natureza"
  };

  categorias = [
    "Todas",
    "Carinhas",
    "Bandeiras",
    "Símbolos",
    "Objetos",
    "Atividades",
    "Viagens e Lugares",
    "Comidas e Bebidas",
    "Animais e Natureza"
  ]

}
