import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RootComponent } from "./pages/layouts/root/root.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AuthPageComponent } from "./pages/auth/auth-page/auth-page.component";
import { EventPageComponent } from "./pages/event-page/event-page.component";
import { SettingsPageComponent } from "./pages/settings-page/settings-page.component";
import { UsersPageComponent } from "./pages/users-page/users-page.component";
import { EventEditionComponent } from "./pages/event-edition/event-edition.component";

const routes :  Routes = [
  {
    path : 'login',
    component : AuthPageComponent,
  },
  {
    path : 'workspace',
    component : RootComponent,
    children : [
      {
        path : 'dashboard',
        component : DashboardComponent
      },
      {
        path : 'events',
        component : EventPageComponent
      },
      {
        path : 'settings',
        component : SettingsPageComponent
      },
      {
        path : 'users',
        component : UsersPageComponent
      },
      {
        path : 'event-edition',
        component : EventEditionComponent
      },

      {
        path : '',
        redirectTo : 'dashboard',
        pathMatch : 'full'
      }
    ]
  },

]


@NgModule({
  imports : [
    RouterModule.forChild(routes)
  ],
  exports : [
    RouterModule
  ]
})

export class AdminRouting {

}
