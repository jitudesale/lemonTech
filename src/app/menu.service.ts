import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'http://49.249.110.2:8050/api/MenuMasters/GetMenuMasterList/173'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getMenuData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }}
