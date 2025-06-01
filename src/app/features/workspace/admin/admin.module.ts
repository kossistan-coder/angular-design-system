import { NgModule } from '@angular/core';
import { CoreModule } from '../../../core/core.module';
import { AdminRouting } from './admin.routing';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './pages/layouts/root/root.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { AuthPageComponent } from './pages/auth/auth-page/auth-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { EventEditionComponent } from './pages/event-edition/event-edition.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminRouting,
    SharedModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [
    RootComponent,
    DashboardComponent,
    SidebarComponent,
    AuthPageComponent,
    EventPageComponent,
    SettingsPageComponent,
    UsersPageComponent,
    EventEditionComponent,

  ],
})
export class AdminModule {}
