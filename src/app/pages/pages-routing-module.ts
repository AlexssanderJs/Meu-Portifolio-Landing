import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { Interests } from './interests/interests';
import path from 'path';
import { Contact } from './contact/contact';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
