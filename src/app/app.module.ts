import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';

import { CreateUserComponent } from './pages/create-user/create-user.component';
import { IslandsComponent } from './pages/islands/islands.component';
import { CreateIslandComponent } from './pages/create-island/create-island.component';
import { EditIslandComponent } from './pages/edit-island/edit-island.component';
import { IslandFormComponent } from './components/islands/island-form/island-form.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { DatatableComponent } from './pages/datatable/datatable.component';
import { SharedModule } from './shared/shared.module';
import { TestService } from './services/test.service';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeComponent,
    UsersComponent,
    CreateUserComponent,
    IslandsComponent,
    CreateIslandComponent,
    EditIslandComponent,
    IslandFormComponent,
    UserFormComponent,
    DatatableComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [TestService],
  //entryComponents: [UserFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
