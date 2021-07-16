import { Component, ComponentFactory, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AdHostDirective } from 'src/app/directives/ad-host.directive';
import { Inode } from 'src/app/interfaces/node.model';
import { AwsCloudtrailComponent } from '../aws-cloudtrail/aws-cloudtrail.component';
import { AwsCloudwatchComponent } from '../aws-cloudwatch/aws-cloudwatch.component';
import { AwsS3BucketComponent } from '../aws-s3-bucket/aws-s3-bucket.component';
import { AwsS3LogbucketComponent } from '../aws-s3-logbucket/aws-s3-logbucket.component';

@Component({
  selector: 'g[node]',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  @Input() node: any;
  @ViewChild(AdHostDirective, {static: true}) adHost!: AdHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }


  ngOnInit(): void {
    this.loadComponent();
  }  

  getNodeComponent(node: any): any{
    switch(node['component']) { 
      case 'AwsCloudwatchComponent': { 
         return AwsCloudwatchComponent; 
      } 
      case 'AwsCloudtrailComponent': { 
         return AwsCloudtrailComponent; 
      } 
      case 'AwsS3BucketComponent':{
        return AwsS3BucketComponent; 
      }
      case 'AwsS3LogbucketComponent':{
        return AwsS3LogbucketComponent; 
      }
      default: { 
        return AwsCloudwatchComponent;
      } 
   } 
  }


  loadComponent() {    
    //this.node.id = Date().toString();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getNodeComponent(this.node));

    const viewContainerRef = this.adHost?.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<any>(componentFactory);
    componentRef.instance.large = (this.node as Inode)?.data?.largeImage;
  } 

}
