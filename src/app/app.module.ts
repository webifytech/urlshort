import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrlMainComponent } from './url-main/url-main.component';
import { UrAboutComponent } from './ur-about/ur-about.component';
import { UrlSlugComponent } from './url-slug/url-slug.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlMainComponent,
    UrAboutComponent,
    UrlSlugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
