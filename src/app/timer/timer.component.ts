import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DurationFormatPipe } from './duration.pipe'
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {

  d : string
  α = 0
  π = Math.PI
  t = 1000;
  playState = 'play';
  duration = 1800

  constructor() { }

  ngOnInit() {
      this.draw()
  }
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
      this.duration -= this.α;

      setTimeout( () => this.draw(), this.t); 
    }

  }
  play(){
    this.playState = "play"
    this.draw()
  }
  pause(){
    this.playState = "pause"
  }

}
