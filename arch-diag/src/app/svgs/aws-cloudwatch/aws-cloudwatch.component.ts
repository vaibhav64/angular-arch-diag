import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'svg[app-aws-cloudwatch]',
  templateUrl: './aws-cloudwatch.component.svg',
  styleUrls: ['./aws-cloudwatch.component.css']
})
export class AwsCloudwatchComponent implements OnInit {

  constructor() {
    console.log("constructor");
   }

  ngOnInit(): void {
    console.log("init");
  }

  onClick(){
    console.log("open model");
  }

}
