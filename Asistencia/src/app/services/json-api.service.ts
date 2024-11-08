import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonApiService {
  private baseUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getAsignaturasDelUsuario(userId: number): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/usuarios/${userId}`).pipe(
      map(user => user.asignaturas)
    );
  }
}
