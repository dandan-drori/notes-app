import { BehaviorSubject } from 'rxjs'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private isPasswordDialogOpenSubject$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isPasswordDialogOpen$ = this.isPasswordDialogOpenSubject$.asObservable();
  constructor() { }

  setIsPasswordDialogOpen(isOpen: boolean): void {
    this.isPasswordDialogOpenSubject$.next(isOpen);
  }
}
