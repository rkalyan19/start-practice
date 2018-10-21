import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public username:string = ""
  name:string
  age:number = null
  country: string= ""
  valueEntered:boolean
  playersData = []
  playerDetails =[ {"name":"kalyan"},{age:23}, {"country":"usa"}]
  startedPlaying
    
  
  

  afterClicking(username){
    this.valueEntered = true
    this.name = this.username;
    this.playersData.push(this.name)
    this.startedPlaying = true
  }

  constructor() { }

  ngOnInit() {
  }

}
