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
  constructor() { }

  http = inject(HttpClient);
  emojis: any = [];

  ngOnInit(): void {
    this.fetchEmojis();
  }

  fetchEmojis() {
    this.http.get("https://emojihub.yurace.pro/api/all/category/flags")
      .subscribe((emojis: any) => {
        console.log(emojis);
        this.emojis = emojis || [];
      });
  }

  joinHtmlCodes(htmlCodes: string[]): string {
    return htmlCodes.join("");
  }

  copyEmoji(htmlCode: string[]): void {
    try {
      const emojiCharacter = this.convertHtmlToEmoji(this.joinHtmlCodes(htmlCode));

      navigator.clipboard.writeText(emojiCharacter).then(() => {
        console.log('Emoji copiado para a área de transferência:', emojiCharacter);
      }).catch((error) => {
        console.error('Erro ao copiar o emoji para a área de transferência:', error);
      });
    } catch (error) {
      console.error('Erro ao copiar o emoji:', error);
    }
  }

  convertHtmlToEmoji(htmlCode: string): string {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlCode;
    const emojiCharacter = tempElement.textContent || '';
    return emojiCharacter;
  }

}
