import { Component } from '@angular/core';
import { Card } from '../../model/card';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projects: Card[] = [
    {
      image: 'assets/angular-logo.png',
      titulo: 'Meu Portifólio',
      descricao: 'Aplicação desenvolvida em Angular, com foco em demonstrar o uso do framework. O projeto inclui páginas estruturadas com componentes reutilizáveis, HTML e CSS.',
      link: 'https://github.com/AlexssanderJs/Meu-Portifolio-Landing'
    },
     {
      image: 'assets/playwright-logo.png',
      titulo: 'PlayWright Test',
      descricao: 'Um simples projeto, em Python, de validação de um formulário com testes unitário utilizado a ferramenta PlayWright.',
      link: 'https://github.com/AlexssanderJs/Teste_de_Formulario_PlayWright'
    },
    {
      image: 'assets/html5-logo.png',
      titulo: 'Landing Page',
      descricao: 'Uma página de apresentação feita apenas com HTML5 e CSS3, totalmente responsiva, mostrando domínio em estruturação de código e estilização moderna.',
      link: 'https://github.com/AlexssanderJs/Landing-Page'
    }
  ]

}
