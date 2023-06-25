import { NavigationModule } from './../navigation/navigation.module'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page.component';



@NgModule({
  declarations: [
    SettingsPageComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
  ]
})
export class SettingsPageModule { }
