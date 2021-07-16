import { Inject, Injectable } from '@angular/core';
import { Edge } from '@swimlane/ngx-graph/lib/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { Inode } from '../interfaces/node.model';

@Injectable({
  providedIn: 'root',
})
export class NodeService {
selected_node_list$: Observable<Inode[]>;
selected_edge_list$: Observable<Edge[]>;
single_node_selected$: Observable<boolean>;
deselect_node$: Observable<boolean>;
prevstate : string = "";
private _edge$: BehaviorSubject<Edge[]>;
private _state$: BehaviorSubject<Inode[]>;
private _singleNodeSelected$ = new BehaviorSubject(false);
private _deselectNode$ = new BehaviorSubject(false);

  protected constructor() {
      let newnode: Inode[] = [];
      let newEdge: Edge[] = [];
      this._edge$ = new BehaviorSubject(newEdge);
      this._state$ = new BehaviorSubject(newnode);
      this.selected_edge_list$ = this._edge$.asObservable();
      this.selected_node_list$ = this._state$.asObservable();
      this.single_node_selected$ = this._singleNodeSelected$.asObservable();
      this.deselect_node$ = this._deselectNode$.asObservable();
  }
  get state(): Inode[]{
      return this._state$.getValue();
  }
  setState(nextState: Inode): void {
       console.log(nextState);
       this._state$.next([nextState, ...this._state$.getValue()]);
  }

  clickListener($event: any): void{
    if($event.id){
      if($event.id == this.prevstate) {
        this._deselectNode$.next(true);
        console.log("current node is the same node loose selection of " + this.prevstate);
        this.prevstate = "";
        return;
      }
      else {
        if(this.prevstate){
          this.drawEdge(this.prevstate, $event.id);
          console.log("draw line and loose selection of " + this.prevstate);
          this._singleNodeSelected$.next(false);
          this.prevstate = "";
          return;
        } 
        else {
          this._singleNodeSelected$.next(true);
          this.prevstate = $event.id;
          return;
        }       
      }
    } 
    else {      
      console.log("current selection is not a node : loose selection of " + this.prevstate);
      this.prevstate = "";
    }
    
  }

  drawEdge(nodeA: string, nodeB: string){
      let newEdge : Edge = {
        id: this.makeid(4),
        source: nodeA,
        target: nodeB
      }
      this._edge$.next([newEdge, ...this._edge$.getValue()]);
  }

  deleteNode(){
    let newNodeArr = this._state$.getValue().filter(f => f.id != this.prevstate)
    this._state$.next(newNodeArr);
  }

  makeid(l: number): string
  {
    var text = "";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i=0; i < l; i++ )
    {  
      text += char_list.charAt(Math.floor(Math.random() * char_list.length));
    }
    return text;
  }


}