import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { Home2Component } from './components/pages/home2/home2.component';
import { Home3Component } from './components/pages/home3/home3.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BlogstandardComponent } from './components/pages/blogstandard/blogstandard.component';
import { CasedetailsComponent } from './components/pages/casedetails/casedetails.component';
import { CasestudyComponent } from './components/pages/casestudy/casestudy.component';
import { ComingsoomComponent } from './components/pages/comingsoom/comingsoom.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicedetailComponent } from './components/pages/servicedetail/servicedetail.component';
import { ShopdetailComponent } from './components/pages/shopdetail/shopdetail.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TeamdetailComponent } from './components/pages/teamdetail/teamdetail.component';


const routes: Routes = [
  {
    path: '', component: Home3Component
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'blog', component: BlogstandardComponent
  },
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
