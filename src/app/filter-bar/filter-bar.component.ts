import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})


export class FilterBarComponent {

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
