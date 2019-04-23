import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckBoxConfirm {
  private data = new BehaviorSubject('');
  getData(): Observable<any> {
    return this.data.asObservable();
  }

  pushData(dataValue) {
    this.data.next(dataValue);
  }
}
