import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdHostDirective } from 'src/app/directives/ad-host.directive';
import { AwsCloudtrailComponent } from './aws-cloudtrail/aws-cloudtrail.component';
import { AwsCloudwatchComponent } from './aws-cloudwatch/aws-cloudwatch.component';
import { AwsS3BucketComponent } from './aws-s3-bucket/aws-s3-bucket.component';
import { AwsS3LogbucketComponent } from './aws-s3-logbucket/aws-s3-logbucket.component';
import { NodeComponent } from './node/node.component';



@NgModule({
  declarations: [
    NodeComponent,
    AwsCloudtrailComponent,
    AwsCloudwatchComponent,
    AwsS3BucketComponent,
    AwsS3LogbucketComponent,
    AdHostDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NodeComponent,
    AwsCloudtrailComponent,
    AwsCloudwatchComponent,
    AwsS3BucketComponent,
    AwsS3LogbucketComponent,
    AdHostDirective
  ]
})
export class SvgsModule { }
