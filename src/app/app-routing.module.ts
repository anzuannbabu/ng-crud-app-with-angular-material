import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { CreateIslandComponent } from './pages/create-island/create-island.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { DatatableComponent } from './pages/datatable/datatable.component';
import { EditIslandComponent } from './pages/edit-island/edit-island.component';
import { HomeComponent } from './pages/home/home.component';
import { IslandsComponent } from './pages/islands/islands.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'create-user',
        component: CreateUserComponent
      },
      {
        path: 'islands',
        component: IslandsComponent
      },
      {
        path: 'create-island',
        component: CreateIslandComponent
      },
      {
        path: 'edit-island/:islandId',
        component: EditIslandComponent
      },
      {
        path: 'table',
        component: DatatableComponent
      },
      {
        path: 'user-management',
        loadChildren: () => import('./modules/user-management/user-management.module').then(m => m.UserManagementModule)
      }
    ]
  },
  /* {
    path: 'user-management',
    component: MainLayoutComponent,
    loadChildren: () => import('./modules/user-management/user-management.module').then(m => m.UserManagementModule)
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
