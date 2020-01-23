import { Component, OnInit, ViewChild, ElementRef, Output, Input, EventEmitter, SimpleChanges, OnChanges, AfterContentInit } from '@angular/core';
import { Todo } from '../todo';
import { DurationFormatPipe } from '../duration-format.pipe';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [ DurationFormatPipe ]
})
export class TimerComponent implements AfterContentInit {

  @Input() Todo: Todo; 

  d : string
  α = 0
  π = Math.PI
  t = 1000;
  playState = 'play';
  duration = 1800;
  showControls = false;

  @Output() playStateChange = new EventEmitter<number>();
  @Output() durationUpdate = new EventEmitter<number>()
  @Output() timeUpdate = new EventEmitter<number>();

  ngAfterContentInit(){
      this.draw()
      if(this.Todo.duration != 1800)
      {
        this.α = this.duration - this.Todo.duration * 0.2
        this.duration = this.Todo.duration
      }
    
  }
  constructor(){}
  draw(){
    if(this.playState === 'play')
    {
      this.α += 0.2;
      this.α %= 360;
      let r = ( this.α * this.π / 180 )
      let x = Math.sin( r ) * 125
      let y = Math.cos( r ) * - 125
      let mid = ( this.α > 180 ) ? 1 : 0
      let anim = 'M 0 0 v -125 A 125 125 1 ' 
              + mid + ' 1 ' 
              +  x  + ' ' 
              +  y  + ' z';
      //[x,y].forEach(function( d ){
      //  d = Math.round( d * 1e3 ) / 1e3;
      //});
      this.d = anim
      this.duration--;
      this.updateTimeSpent()

      setTimeout( () => this.draw(), this.t); 
    }

  }
  play(){
    this.playState = "play"
    this.draw()
  }
  playStateChanged(){
    this.playStateChange.emit(this.duration)
  }
  pause(){
    this.playState = "pause"
    this.playStateChanged()
  }
  toggleControls(){
    this.showControls = !this.showControls; 
  }
  updateTimeSpent(){
    this.timeUpdate.emit(this.duration)

  }
  


}
