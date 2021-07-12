import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'svg[app-aws-s3-bucket]',
  templateUrl: './aws-s3-bucket.component.svg',
  styleUrls: ['./aws-s3-bucket.component.css']
})
export class AwsS3BucketComponent implements OnInit {
  @Input() large: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
