import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SumRequest } from '../models/sum-request';
import { SumResponse } from '../models/sum-response';

@Injectable({
  providedIn: 'root'
})
export class SumService {

  private API_SUM_ENDPOINT = "http://sum-service-jenkins:9000/api/sum";

  constructor(private http: HttpClient) { }

  sum(request: SumRequest) : number {
    return request.a + request.b;
  }


  sumAPI(request: SumRequest) : Observable<SumResponse> {
    return this.http.post<SumResponse>(this.API_SUM_ENDPOINT, request);
  }
}
