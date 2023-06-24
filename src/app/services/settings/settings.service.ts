import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Settings } from '../../models/interfaces/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  SETTINGS_URL: string = 'http://localhost:3000/settings';
  constructor(private http: HttpClient) { }

  getSettings(): Observable<Settings> {
    return this.http.get<Settings>(this.SETTINGS_URL);
  }

  setSettings(settings: Settings): Observable<Settings> {
    return this.http.put<Settings>(this.SETTINGS_URL, { settings });
  }

  initDefaultSettings(): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(this.SETTINGS_URL, {});
  }
}
