import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private onSubject = new Subject<{ key: string, value: any }>();
  private changes = this.onSubject.asObservable().pipe(share());

  store(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
    this.onSubject.next({ key: key, value: data })
  }

  clear(key) {
    localStorage.removeItem(key);
    this.onSubject.next({ key: key, value: null });
  }

  subscribe(func) {
    func();
    this.changes.subscribe(func);
  }
}
