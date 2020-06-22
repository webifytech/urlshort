import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlMainComponent } from './url-main/url-main.component';
import { UrAboutComponent } from './ur-about/ur-about.component';
import { UrlSlugComponent } from './url-slug/url-slug.component';


const routes: Routes = [
  {
    path: '', component:UrlMainComponent
  },
  {
    path: 'about', component: UrAboutComponent
  },
  {
    path: '**', component: UrlSlugComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
