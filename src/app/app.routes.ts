import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path : '',
    loadChildren : () =>  import("./features/workspace/workspace.module").then((m) => m.WorkspaceModule)
  }
];
