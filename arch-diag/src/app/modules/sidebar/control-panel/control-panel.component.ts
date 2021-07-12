import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Node } from '@swimlane/ngx-graph/lib/models';
@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.svg',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit, AfterViewInit{
  //@ViewChild('firstGroup') firstGroup!: ElementRef;
  public large_icon : boolean = false;
  public width: number = 55;
  public height: number = 55;
  constructor() { }

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
    }
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(){ 
  }
  
  cloneRect($event: any) {
    var cloneElement = $event.target.cloneNode(false);
    console.log($event);
    var newx = 25 + Math.random() * 200;
    var newy = 70 + Math.random() * 150;
    cloneElement.setAttributeNS(null,"x",newx);
    cloneElement.setAttributeNS(null,"y",newy);
    //this.firstGroup.nativeElement.appendChild(cloneElement);
}
}