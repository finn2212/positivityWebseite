import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { Home3Component } from './components/pages/home3/home3.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BlogstandardComponent } from './components/pages/blogstandard/blogstandard.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { BlogdetailsComponent } from './components/pages/blogdetails/blogdetails.component';
import { BloggridComponent } from './components/pages/bloggrid/bloggrid.component';
import { ImpressumComponent } from './components/pages/impressum/impressum.component';
import { PositivesDenkenComponent } from './components/pages/blog-posts/positives-denken/positives-denken.component';
import { PositivesmonesmindsetComponent } from './components/pages/blog-posts/moneyMindset/positivesmonesmindset/positivesmonesmindset.component';
import { ColabsComponent } from './components/pages/colabs/colabs.component';






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
    path: 'blog-positives-denken', component: PositivesDenkenComponent
  },
  {
    path: 'positives-money-mindset', component: PositivesmonesmindsetComponent
  },
  {
    path: 'blog-grid', component: BloggridComponent
  },
  {
    path: 'impressum', component: ImpressumComponent
  },
  {
    path: 'collaboration', component: ColabsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
