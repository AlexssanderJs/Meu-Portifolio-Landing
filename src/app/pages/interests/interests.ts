import { Component } from '@angular/core';

@Component({
  selector: 'app-interests',
  imports: [],
  templateUrl: './interests.html',
  styleUrl: './interests.css'
})
export class Interests {

  interests: { image: string, titulo: string, descricao: string} [] =
  [
    { image: 'assets/christianity-image.jpg', titulo: 'Cristianismo', descricao: 'Amo a Deus acima de toda as coisas, minha fé e meus valores estão firmados nele. O cristianismo é meu estilo de vida.'},
    { image: 'assets/program-image.jpg', titulo: 'Programação', descricao: 'Programação é o que eu gosto de fazer. É a área que quero atuar profissionalmente, Sempre procurando aprender mais.'},
    { image: 'assets/guittar-image.jpeg', titulo: 'Música', descricao: 'Gosto muito de música desde pequeno, hoje toco alguns instrumentos e com certeza é algo que vou levar para a vida toda.'},
    { image: 'assets/games-image.jpg', titulo: 'Games', descricao: 'No meu tempo livre gosto de jogar alguns jogos por diversão e para relaxar. '},
  ]
  
}
