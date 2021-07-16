import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectPanelComponent } from './select-panel/select-panel.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { SvgsModule } from '../svgs/svgs.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    SelectPanelComponent,
    ControlPanelComponent
  ],
  imports: [
    CommonModule,
    SvgsModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    SelectPanelComponent,
    ControlPanelComponent
  ]
})
export class SidebarModule { }
