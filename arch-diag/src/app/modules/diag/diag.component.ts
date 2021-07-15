import { Component, OnInit } from '@angular/core';
import { DagreNodesOnlyLayout } from '@swimlane/ngx-graph';
import { Edge, Layout} from '@swimlane/ngx-graph/lib/models';
import * as shape from 'd3-shape';
import { Subject } from 'rxjs';
import { Inode } from 'src/app/interfaces/node.model';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-diag',
  templateUrl: './diag.component.html',
  styleUrls: ['./diag.component.scss']
})
export class DiagComponent implements OnInit {
  public curve: any = shape.curveStepBefore;
  public selectedId: string = '';
  public layout: Layout = new DagreNodesOnlyLayout();
  public links: Edge[] = [];
  public nodes: Inode[] = [];
  update$: Subject<boolean> = new Subject();

  constructor(private nodeService: NodeService) {
      this.nodeService.nodeState$.subscribe(data => {
        data.map(d=> {
          if(d.data) d.data.largeImage = true;
        })
        this.nodes = data;
        this.update$.next(true);
      })
   }

  ngOnInit(): void {
     
  }
  

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
