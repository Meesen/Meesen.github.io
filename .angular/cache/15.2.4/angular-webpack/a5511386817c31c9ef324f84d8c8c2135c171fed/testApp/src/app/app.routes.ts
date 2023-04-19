import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactsComponent } from "./contacts/contacts.component";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';


export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'contacts',
        component: ContactsComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  