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
      titulo: 'Meu Portifólio',
      descricao: 'Uma landing page com intuito de demosntrar o dominio do framework Angular.',
      link: 'https://github.com/AlexssanderJs/Meu-Portifolio-Landing'
    },
     {
      titulo: 'PlayWright',
      descricao: 'Um simples projeto, em Python, de validação de um formulário com testes unitário utilizado a ferramenta PlayWright',
      link: 'https://github.com/AlexssanderJs/Teste_de_Formulario_PlayWright'
    },
    {
      titulo: 'Landing Page',
      descricao: 'Projeto de uma Landing Page com foco no uso de HTML5 e CSS3',
      link: 'https://github.com/AlexssanderJs/Landing-Page'
    }
  ]

}
