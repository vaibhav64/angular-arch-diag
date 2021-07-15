import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Inode } from '../interfaces/node.model';

@Injectable({
  providedIn: 'root',
})
export class NodeService {
nodeState$: Observable<Inode[]>;
private _state$: BehaviorSubject<Inode[]>;
  protected constructor() {
      let newnode: Inode[] = [];
      this._state$ = new BehaviorSubject(newnode);
      this.nodeState$ = this._state$.asObservable();
  }
  get state(): Inode[]{
      return this._state$.getValue();
  }
  setState(nextState: Inode): void {
       console.log(nextState);
       this._state$.next([nextState, ...this._state$.getValue()]);
  }
}