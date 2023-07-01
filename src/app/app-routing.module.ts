import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Comp0Component } from './comp0/comp0.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';



const routes: Routes = [
 
  {path : "sidebar" , component:SidebarComponent },
  {path : "experiences" , component:ExperiencesComponent },
  
  {path : "education" , component:EducationComponent},
  {path : "skills" , component:SkillsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
