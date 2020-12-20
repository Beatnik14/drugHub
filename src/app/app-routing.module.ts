import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddDrugComponent } from './add-drug/add-drug.component';
import { ContactComponent } from './contact/contact.component';
import { DrugDetailComponent } from './drug-detail/drug-detail.component';
import { DrugsComponent } from './drugs/drugs.component';
import { GetDrugComponent } from './get-drug/get-drug.component';
import { HomeComponent } from './home/home.component';
import { MedicalFieldComponent } from './medical-field/medical-field.component';

const routes: Routes = [
  {
    
    path: '',
    redirectTo:'home',
    pathMatch: 'full'

  },
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
  {
    path:'adddrug',
    component: AddDrugComponent

  },
  {
    path:'getdrug',
    component: GetDrugComponent

  },
  {
    path: 'drug/:id/:name',
    component: DrugDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
