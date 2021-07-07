import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private onSubject = new Subject<{ key: string, value: any }>();
  private changes = this.onSubject.asObservable().pipe(share());

  /** Store an item in localStorage and notify observers */
  store(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
    this.onSubject.next({ key: key, value: data })
  }

  /** Remove an item from localStorage and notify observers */
  clear(key) {
    localStorage.removeItem(key);
    this.onSubject.next({ key: key, value: null });
  }

  /** Add an observer */
  subscribe(key: string, setter: Function) {
    setter(this.get(key));
    this.changes.subscribe(() => setter(this.get(key)));
  }

  /** Get/parse an item from the localStorage */
  private get = (key) => JSON.parse(localStorage.getItem(key));
}
