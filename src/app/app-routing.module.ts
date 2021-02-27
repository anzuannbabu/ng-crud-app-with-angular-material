import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { CreateIslandComponent } from './pages/create-island/create-island.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { DatatableComponent } from './pages/datatable/datatable.component';
import { EditIslandComponent } from './pages/edit-island/edit-island.component';
import { HomeComponent } from './pages/home/home.component';
import { IslandsComponent } from './pages/islands/islands.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersComponent } from './pages/users/users.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
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
      /* {
        path: 'user-management',
        loadChildren: () => import('./modules/user-management/user-management.module').then(m => m.UserManagementModule)
      } */
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user-management',
    canActivate: [AuthGuard],
    component: MainLayoutComponent,
    loadChildren: () => import('./modules/user-management/user-management.module').then(m => m.UserManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
