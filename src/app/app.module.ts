import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { BlogsidebarComponent } from './components/layouts/blogsidebar/blogsidebar.component';
import { ShopsidebarComponent } from './components/layouts/shopsidebar/shopsidebar.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { Footer3Component } from './components/layouts/footer3/footer3.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BlogdetailsComponent } from './components/pages/blogdetails/blogdetails.component';
import { BloggridComponent } from './components/pages/bloggrid/bloggrid.component';
import { BlogstandardComponent } from './components/pages/blogstandard/blogstandard.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { Home3Component } from './components/pages/home3/home3.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    BlogsidebarComponent,
    ShopsidebarComponent,
    HeaderComponent,

    Footer3Component,
    AboutComponent,
    BlogdetailsComponent,
    BloggridComponent,
    BlogstandardComponent,
    ContactComponent,
    Home3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SnotifyModule
  ],
  providers: [{ provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
