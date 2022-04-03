import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl: string = 'http://localhost:3001';

  constructor(private api: HttpClient) {}

  get user(): Observable<any> {
    return this.api.get<any>(`${this.baseUrl}/user`).pipe(tap((res) => res));
  }
}
