import { Injectable } from '@angular/core';
import { SumRequest } from '../models/sum-request';

@Injectable({
  providedIn: 'root'
})
export class SumService {

  constructor() { }

  sum(request: SumRequest) : number {
    return request.a + request.b;
  }
}
