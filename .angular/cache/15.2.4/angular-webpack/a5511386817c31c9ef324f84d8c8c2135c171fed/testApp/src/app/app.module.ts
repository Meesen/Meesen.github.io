import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from "ng-particles";
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { OverlayComponent } from './overlay/overlay.component';
import { EventCardComponent } from './eventCard/eventCard.component';
import { InnovatieComponent } from './innovatie/innovatie.component';
import { ExtraComponent } from './extra/extra.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    OverlayComponent,
    EventCardComponent,
    InnovatieComponent,
    ExtraComponent
  ],
  imports: [
    BrowserModule,
    NgParticlesModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
