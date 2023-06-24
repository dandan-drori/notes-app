import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Note } from '../../models/interfaces/note';
import { NoteService } from './../../services/note/note.service';
import { Settings } from './../../models/interfaces/settings';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss'],
})
export class EditNoteComponent implements OnInit {
  public noteId: string = '';
  public noteType: 'notes' | 'trash' = 'notes';
  public backPath: string = '../';
  public settings$: Observable<Settings> = of();
  public password: string = '';
  public isNoteLocked: boolean = true;
  public unlockAttempts: number = 0;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly noteService: NoteService,
    private readonly router: Router,
  ) {}

  ngOnInit() {
    this.noteId = this.activatedRoute.snapshot.params?.['noteId'];
    this.noteType = this.activatedRoute.snapshot.queryParams?.['noteType'];
    this.updateBackPath();
  }

  editNote(title: string, text: string, note: Note): void {
    this.noteService.updateNote({...note, title, text}).subscribe(() => {
      this.router.navigate(['../']);
    });
  }

  updateBackPath(): void {
    this.backPath = this.noteType === 'notes' ? '../' : '../trash';
  }

  submitPassword(note: Note, password: string): void {
    this.noteService.unlockNote(note, password).subscribe((isNoteUnlocked: boolean) => {
      this.unlockAttempts++;
      if (!isNoteUnlocked) {
        this.password = '';
      }
      this.isNoteLocked = !isNoteUnlocked;
    });
  }
}
