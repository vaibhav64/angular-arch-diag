import { Component, OnInit } from '@angular/core';
import { DagreNodesOnlyLayout } from '@swimlane/ngx-graph';
import { Edge, Layout, Node } from '@swimlane/ngx-graph/lib/models';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-diag',
  templateUrl: './diag.component.html',
  styleUrls: ['./diag.component.scss']
})
export class DiagComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public curve: any = shape.curveStepBefore;
  public selectedId: string = '';
  public layout: Layout = new DagreNodesOnlyLayout();
  public links: Edge[] = [
    {
      id: 'a',
      source: 'first',
      target: 'second',
      label: 'is parent of'
    },
    {
      id: 'b',
      source: 'first',
      target: 'third',
      label: 'custom label'
    },
    {
      id: 'c',
      source: 'first',
      target: 'fourth',
      label: 'custom label'
    }
  ];
  public nodes: Node[] = [
    {
      id: 'first',
      label: 'AwsS3LogbucketComponent'
    },
    {
      id: 'second',
      label: 'AwsCloudtrailComponent'
    },
    {
      id: 'third',
      label: 'AwsCloudwatchComponent'
    },
    {
      id: 'fourth',
      label: 'AwsS3BucketComponent'
    },
    {
      id: 'fifth',
      label: 'AwsS3BucketComponent'
    }
  ];

  onActivate($event: any): void{
    console.log("on activate event");
  }
  onDeactivate($event: any): void{
    console.log("on deactivate event");
  }
  onZoomChange($event: any): void{
    console.log("on zoom change event");
  }
  onSelect($event: any): void{
    this.selectedId = $event.id;
  }

}
