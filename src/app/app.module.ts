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
import { ImpressumComponent } from './components/pages/impressum/impressum.component';
import { PositivesDenkenComponent } from './components/pages/blog-posts/positives-denken/positives-denken.component';
import { PositivesmonesmindsetComponent } from './components/pages/blog-posts/moneyMindset/positivesmonesmindset/positivesmonesmindset.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { LOCALE_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ColabsComponent } from './components/pages/colabs/colabs.component';
import { NgImageSliderModule } from 'ng-image-slider';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

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
    ImpressumComponent,
    PositivesDenkenComponent,
    PositivesmonesmindsetComponent,
    ColabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule,
    NgImageSliderModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, { provide: LOCALE_ID, useValue: window.navigator.language },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
