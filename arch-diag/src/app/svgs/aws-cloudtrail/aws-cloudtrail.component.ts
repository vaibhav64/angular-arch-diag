import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'svg[app-aws-cloudtrail]',
  templateUrl: './aws-cloudtrail.component.svg',
  styleUrls: ['./aws-cloudtrail.component.css']
})
export class AwsCloudtrailComponent implements OnInit {
  @Input() large: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
