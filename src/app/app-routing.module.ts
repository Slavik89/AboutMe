import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillComponent } from './skill/skill.component';
import { QualitiesComponent } from './qualities/qualities.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
  {path: 'skill', component: SkillComponent},
  {path: 'qualities', component: QualitiesComponent},
  {path: 'workExperience', component: WorkExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SkillComponent, QualitiesComponent, WorkExperienceComponent]
