import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemSettingComponent } from './system-setting/system-setting.component';
import { MessageTemplateComponent } from './message-template/message-template.component';

const routes: Routes = [
  { path: 'setting', component: SystemSettingComponent },
  { path: 'message-setting', component: MessageTemplateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetupRoutingModule {}
