import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectPanelComponent } from './select-panel/select-panel.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { SvgsModule } from '../svgs/svgs.module';



@NgModule({
  declarations: [
    SelectPanelComponent,
    ControlPanelComponent
  ],
  imports: [
    CommonModule,
    SvgsModule
  ],
  exports: [
    SelectPanelComponent,
    ControlPanelComponent
  ]
})
export class SidebarModule { }
