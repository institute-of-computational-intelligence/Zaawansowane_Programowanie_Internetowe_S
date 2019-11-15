import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  inputValue = new BehaviorSubject<number>(0);

  constructor() {

  }
}
