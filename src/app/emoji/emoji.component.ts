import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, OnChanges, inject, SimpleChanges  } from '@angular/core';
import { Category } from '../shared/types';

@Component({
  selector: 'app-emoji',
  standalone: true,
  imports: [],
  templateUrl: './emoji.component.html',
  styleUrl: './emoji.component.css'
})

export class EmojiComponent implements OnInit, OnChanges{
  constructor() { }

  @Input() category?: Category;
  http = inject(HttpClient);
  emojis: any = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['category'] && !changes['category'].firstChange) {
      this.fetchEmojis();
    }
  }


  ngOnInit(): void {
    this.fetchEmojis();
  }

  fetchEmojis() {
    if (this.category && this.category.en !== "All") {
      this.http.get(`https://emojihub.yurace.pro/api/all/category/${this.category.en}`)
        .subscribe((emojis: any) => {
          console.log(emojis);
          this.emojis = emojis || [];
        });
    } else {
      this.http.get("https://emojihub.yurace.pro/api/all")
        .subscribe((emojis: any) => {
          console.log(emojis);
          this.emojis = emojis || [];
        });
    }
  }

  joinHtmlCodes(htmlCodes: string[]): string {
    return htmlCodes.join("");
  }

  copyEmoji(htmlCode: string[]): void {
    try {
      const emojiCharacter = this.convertHtmlToEmoji(this.joinHtmlCodes(htmlCode));

      navigator.clipboard.writeText(emojiCharacter).then(() => {
        this.showCopySuccessMessage();
      }).catch((error) => {
        this.showCopyErrorMessage();
      });
    } catch (error) {
      console.error('Erro ao copiar o emoji:', error);
    }
  }

  showCopySuccessMessage(): void {
    alert('Emoji copiado para a área de transferência!');
  }

  showCopyErrorMessage(): void {
    alert('Erro ao copiar o emoji para a área de transferência. Por favor, tente novamente.');
  }

  convertHtmlToEmoji(htmlCode: string): string {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlCode;
    const emojiCharacter = tempElement.textContent || '';
    return emojiCharacter;
  }

}
