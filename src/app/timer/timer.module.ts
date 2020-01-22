import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationFormatPipe } from './duration.pipe';
import { TimerComponent } from './timer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimerComponent,
    DurationFormatPipe
  ],
  exports: [
    TimerComponent
  ]
})
export class TimerModule { }
