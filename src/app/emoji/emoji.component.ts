import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-emoji',
  standalone: true,
  imports: [],
  templateUrl: './emoji.component.html',
  styleUrl: './emoji.component.css'
})
export class EmojiComponent implements OnInit{
  http = inject(HttpClient);
  emojis: any = [];

  ngOnInit(): void {
    this.fetchEmojis();
  }

  fetchEmojis() {
    this.http.get("https://emojihub.yurace.pro/api/all/category/flags")
      .subscribe((emojis: any) => {
        console.log(emojis);
        this.emojis = emojis;
      })
  }

  joinHtmlCodes(htmlCodes: string[]): string {
    return htmlCodes.join('');
  }
}
