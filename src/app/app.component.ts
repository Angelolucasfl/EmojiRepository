import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmojiComponent } from './emoji/emoji.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmojiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmojiRepository';
}
