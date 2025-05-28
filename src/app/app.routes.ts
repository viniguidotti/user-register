import { Routes } from '@angular/router';
import { RegisterComponent } from './customer/register/register.component';
import { ConsultComponent } from './customer/consult/consult.component';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'consult', component: ConsultComponent },
];
