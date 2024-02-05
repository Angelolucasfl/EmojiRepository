import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmojiComponent } from './emoji/emoji.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Category } from './shared/types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmojiComponent, FilterBarComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmojiRepository';
  categorySelected?: Category

  reciveCategory(event: Category): void {
    this.categorySelected = event;
  }
}
