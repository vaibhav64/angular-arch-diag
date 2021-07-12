import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'svg[app-aws-s3-logbucket]',
  templateUrl: './aws-s3-logbucket.component.svg',
  styleUrls: ['./aws-s3-logbucket.component.css']
})
export class AwsS3LogbucketComponent implements OnInit {
  @Input() large: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
