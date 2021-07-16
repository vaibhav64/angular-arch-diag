import { Component, OnInit } from '@angular/core';
import { NodeService } from 'src/app/services/node.service';

@Component({
  selector: 'app-select-panel',
  templateUrl: './select-panel.component.html',
  styleUrls: ['./select-panel.component.scss']
})
export class SelectPanelComponent implements OnInit {
  public show_delete_button: boolean = false;
  constructor(private nodeService: NodeService) {
    this.nodeService.single_node_selected$.subscribe(data => {
      this.show_delete_button = data;
    })
   }

  ngOnInit(): void {
  }

  delete($event: any){
    this.nodeService.deleteNode()
    this.show_delete_button = false;
  }

}
