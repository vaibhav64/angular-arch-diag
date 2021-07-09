import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiagComponent } from './diag.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { SvgsModule } from 'src/app/svgs/svgs.module';



@NgModule({
  declarations: [
    DiagComponent    
  ],
  imports: [
    CommonModule,
    NgxGraphModule,
    SvgsModule
  ],
  exports: [
    DiagComponent
  ]
})
export class DiagModule { }
