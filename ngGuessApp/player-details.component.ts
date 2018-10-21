import { Component, OnInit,Input } from '@angular/core';



@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  @Input() playerDetailsPD 
  playerDetails

  constructor() { }

  ngOnInit() {
  }
  showPlayerDetails(){
  this.playerDetails=this.playerDetailsPD
  this.playerDetails.push(this.playerDetailsPD)
  }

}
