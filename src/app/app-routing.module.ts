import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { DrugsComponent } from './drugs/drugs.component';
import { HomeComponent } from './home/home.component';
import { MedicalFieldComponent } from './medical-field/medical-field.component';

const routes: Routes = [
  {
    path:'drugs',
    component: DrugsComponent

  },
  {
    path:'home',
    component: HomeComponent

  },
  {
    path:'medicalField',
    component: MedicalFieldComponent

  },
  {
    path:'aboutus',
    component: AboutUsComponent

  },
  {
    path:'contact',
    component: ContactComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
