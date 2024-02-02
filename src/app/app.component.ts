import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmojiComponent } from './emoji/emoji.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmojiComponent, FilterBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmojiRepository';
}
