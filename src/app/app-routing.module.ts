import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Home3Component } from './components/pages/home3/home3.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BlogstandardComponent } from './components/pages/blogstandard/blogstandard.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogdetailsComponent } from './components/pages/blogdetails/blogdetails.component';
import { BloggridComponent } from './components/pages/bloggrid/bloggrid.component';
import { ImpressumComponent } from './components/pages/impressum/impressum.component';



const routes: Routes = [
  {
    path: '', component: Home3Component
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'blog', component: BlogstandardComponent
  },
  {
    path: 'blog-detail', component: BlogdetailsComponent
  },
  {
    path: 'blog-grid', component: BloggridComponent
  },
  {
    path: 'impressum', component: ImpressumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
