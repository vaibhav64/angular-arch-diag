import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DiagModule } from './modules/diag/diag.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarModule } from './modules/sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    DiagModule,
    BrowserAnimationsModule,    
    SidebarModule,
    MatSidenavModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
