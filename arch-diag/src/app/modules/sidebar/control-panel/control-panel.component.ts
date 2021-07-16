import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Node } from '@swimlane/ngx-graph/lib/models';
import { NodeService } from 'src/app/services/node.service';
import { nodes as nodesArray } from 'src/app/constants/nodes';
import { Inode } from 'src/app/interfaces/node.model';
@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit, AfterViewInit{
  public large_icon : boolean = false;
  public nodes: Inode[];
  constructor(private nodeService: NodeService) {
      this.nodes = nodesArray;
   } 

  ngOnInit(): void {
  }

  ngAfterViewInit(){ 
  }
  
 cloneNode(node: Inode) {
   let n = JSON.parse(JSON.stringify(node));
    n.id = this.nodeService.makeid(3);
    this.nodeService.setState(n);   
  }


}