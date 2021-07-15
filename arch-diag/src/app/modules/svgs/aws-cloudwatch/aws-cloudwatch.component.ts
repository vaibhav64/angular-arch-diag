import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'svg[app-aws-cloudwatch]',
  templateUrl: './aws-cloudwatch.component.svg',
  styleUrls: ['./aws-cloudwatch.component.css']
})
export class AwsCloudwatchComponent implements OnInit {
  @Input() large: boolean = true;
  constructor() {
   }

  ngOnInit(): void {
  }

  onClick(){
    console.log("open model");
  }

}
