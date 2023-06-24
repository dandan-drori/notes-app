import { InsertResult } from './../../models/interfaces/insertResult'
import { DEFAULT_NOTE } from './../../config/default-note'
import { Note } from './../../models/interfaces/note';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private readonly NOTES_URL = 'http://localhost:3000/notes';
  private readonly TRASH_URL = 'http://localhost:3000/trash';

  constructor(private readonly http: HttpClient) { }

  public getNotes(from: string = 'notes'): Observable<Note[]> {
    const url = from === 'notes' ? this.NOTES_URL : this.TRASH_URL;
    return this.http.get<Note[]>(url);
  }

  public getNote(noteId: string, from: 'notes' | 'trash' = 'notes'): Observable<Note> {
    const url = from === 'notes' ? this.NOTES_URL : this.TRASH_URL;
    return this.http.get<Note>(`${url}/${noteId}`);
  }

  public addNote(note: Note): Observable<InsertResult> {
    return this.http.post<InsertResult>(this.NOTES_URL, { note });
  }
  
  public deleteNote(note: Note, from: 'notes' | 'trash' = 'notes'): Observable<Note> {
    if (from === 'notes') {
      return this.http.post<Note>(`${this.NOTES_URL}/${note._id}`, { note });
    }
    return this.http.delete<Note>(`${this.TRASH_URL}/${note._id}`);
  }
  
  public updateNote(note: Note): Observable<Note> {
    return this.http.put<Note>(this.NOTES_URL, { note });
  }

  public emptyTrash(): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`${this.TRASH_URL}/empty`);
  }

  public restoreNote(note: Note): Observable<Note> {
    return this.http.post<Note>(`${this.TRASH_URL}/restore`, { note });
  }

  public unlockNote(note: Note, password: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.NOTES_URL}/unlock`, { note, password });
  }

  public lockNote(note: Note, password: string): Observable<Note> {
    return this.http.post<Note>(`${this.NOTES_URL}/lock`, { note, password });
  }
}
