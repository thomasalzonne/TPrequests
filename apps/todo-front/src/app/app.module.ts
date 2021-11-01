import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoAngularLibModule } from '../../../../libs/todo-angular-lib/src/index';
import { WelcomeServiceService } from './welcome/welcome-service.service';
import { RouterModule, Routes } from '@angular/router';
import { TodoWelcomeComponent } from 'libs/todo-angular-lib/src/lib/todo-welcome/todo-welcome/todo-welcome.component';
import { TodoComponent } from 'libs/todo-angular-lib/src/lib/todo/todo.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { NetworkComponent } from './network/network/network.component';
import { NetworkInterceptor } from './interceptor/network.interceptor';

const routes: Routes = [
  {
    path: 'welcome',
    component : TodoWelcomeComponent
  },
  {
    path: 'user',
    component : TodoComponent
  },
  {
    path: 'form',
    component : FormComponent
  },
  {
    path: 'network',
    component : NetworkComponent
  }
]

@NgModule({
  declarations: [AppComponent, FormComponent, NetworkComponent],
  imports: [MatTableModule, MatSnackBarModule, MatInputModule, MatButtonModule, BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, TodoAngularLibModule, RouterModule.forRoot(routes, {initialNavigation: 'enabledBlocking'}), BrowserAnimationsModule],
  providers: [WelcomeServiceService,
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NetworkInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
