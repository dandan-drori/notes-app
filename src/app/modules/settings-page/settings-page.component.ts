import { Settings } from './../../models/interfaces/settings'
import { Observable, of } from 'rxjs'
import { SettingsService } from './../../services/settings/settings.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  settings$: Observable<Settings> = of();

  constructor(private readonly settingsService: SettingsService) {}

  ngOnInit(): void {
    this.settings$ = this.settingsService.getSettings();
  }
}
