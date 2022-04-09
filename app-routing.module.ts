import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { CoursesComponent } from './courses/courses.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'students', component: StudentListComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'home', component: RegisterComponent},
  {path: 'about', component: AboutComponent},
  {path: 'detail', component: ContentComponent},
  {path: 'update-student/:id', component: UpdateStudentComponent}
  
  //{path: '', redirectTo: 'students', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
