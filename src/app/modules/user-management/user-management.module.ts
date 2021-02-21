import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserManagementRoutingModule } from './routing/user-management-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestService } from 'src/app/services/test.service';



@NgModule({
  declarations: [UserManagementComponent, DashboardComponent, UserListComponent],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedModule
  ],
  //providers: [TestService]
})
export class UserManagementModule { }
