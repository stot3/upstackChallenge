import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { DurationFormatPipe } from '../duration.pipe';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TimerComponent,
    DurationFormatPipe
  ],
  exports: [
    TimerComponent
  ],
  providers: [
    DurationFormatPipe
  ]
})
export class TimerModule { }
