import { RouterModule, Routes } from "@angular/router";
import { AdminModule } from "./admin/admin.module";
import { NgModule } from "@angular/core";

const routes : Routes = [
  {
    path : "user",
    loadChildren : () => import("./guest/guest.module").then((m)=> m.GuestModule)
  },
  {
    path : "admin",
    loadChildren : () => import("./admin/admin.module").then((m) => m.AdminModule)
  }
]

@NgModule({
  imports : [
    RouterModule.forChild(routes)
  ],
  exports : [
    RouterModule
  ]
})

export class WorkspaceRouting {

}
