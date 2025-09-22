import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Interests } from './pages/interests/interests';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: Home
      },
      {
        path: 'projetos',
        component: Projects
      },
      {
        path: 'interesses',
        component: Interests
      },
      {
        path: 'contato',
        component: Contact
      }
];
