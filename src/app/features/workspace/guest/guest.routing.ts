import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";

const routes : Routes = [
  {
    path : '',
    component : HomeComponent
  }
]

@NgModule({
  imports : [
    RouterModule.forChild(routes)
  ]
})

export class GuestRouting {

}
