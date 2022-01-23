import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LordOfTheRingsComponent } from './components/lord-of-the-rings/lord-of-the-rings.component';

const routes: Routes = [
  {
    path: "lord-of-the-rings",
    component: LordOfTheRingsComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "lord-of-the-rings"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
