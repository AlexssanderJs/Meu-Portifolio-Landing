import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render} from '@testing-library/angular';
import { Projects } from './projects';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve ter exatamente 3 projetos', async () => {
    expect(component.projects.length).toBe(3);
  });

   it('deve renderizar todos os projetos', async () => {
    const itens = fixture.nativeElement.querySelectorAll('.project-item');
    expect(itens.length).toBe(component.projects.length);
  });

   it('deve renderizar todos os títulos dos projetos', () => {
     const titles = fixture.nativeElement.querySelectorAll('.project-title');
     expect(titles.length).toBe(component.projects.length);
     expect(titles[0].textContent).toContain('Meu Portifólio');
     expect(titles[1].textContent).toContain('PlayWright Test');
     expect(titles[2].textContent).toContain('Landing Page');
   });

  it('deve renderizar todas as descrições', () => {
    const descricoes = fixture.nativeElement.querySelectorAll('.project-descricao');
     expect(descricoes.length).toBe(component.projects.length);
     expect(descricoes[0].textContent).toContain('Aplicação desenvolvida em Angular');
     expect(descricoes[1].textContent).toContain('Um simples projeto, em Python');
     expect(descricoes[2].textContent).toContain('Uma página de apresentação feita apenas');
   });

  it('deve renderizar os links corretos', () => {
    const links = fixture.nativeElement.querySelectorAll('.project-link');
    expect(links.length).toBe(component.projects.length);
    expect(links[0].getAttribute('href')).toBe('https://github.com/AlexssanderJs/Meu-Portifolio-Landing');
    expect(links[1].getAttribute('href')).toBe('https://github.com/AlexssanderJs/Teste_de_Formulario_PlayWright');
    expect(links[2].getAttribute('href')).toBe('https://github.com/AlexssanderJs/Landing-Page');
  });

  it('deve garantir que todos os liks abrem em nova aba', () => {
      const links = fixture.nativeElement.querySelectorAll('.project-link');

      links.forEach((links: HTMLAnchorElement) => {
        expect(links.getAttribute('target')).toBe('_blank');
     });
  });

  it('deve renderizar todas as imagens corretamente', () => {
       const imagens = fixture.nativeElement.querySelectorAll('.project-image');
       expect(imagens.length).toBe(component.projects.length);
      
       imagens.forEach((img: HTMLAnchorElement, index: number) => {
         expect(img.getAttribute('src')).toBe(component.projects[index].image);
         expect(img.getAttribute('alt')).toBe('imagem');
       })
  });
});
