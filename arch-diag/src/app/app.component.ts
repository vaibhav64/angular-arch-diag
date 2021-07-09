import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public fixed: boolean = true;
  public top: number = 0;
  public bottom: number = 0;
}
