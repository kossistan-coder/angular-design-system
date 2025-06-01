import { NgModule } from "@angular/core";
import { WorkspaceRouting } from "./workspace.routing";
import { GuestModule } from "./guest/guest.module";
import { AdminModule } from "./admin/admin.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  imports : [
    CommonModule,
    RouterModule,
    GuestModule,
    AdminModule,
  ]
})

export class WorkspaceModule {

}
