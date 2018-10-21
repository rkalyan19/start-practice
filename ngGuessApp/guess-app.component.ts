import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-guess-app',
  templateUrl: './guess-app.component.html',
  styleUrls: ['./guess-app.component.css']
})
export class GuessAppComponent implements OnInit {
  original: number  = Math.floor((Math.random() * 10) + 1);
  valueEntered: number 
  resultGuess: string
  hasWon:boolean
  noOfTries:number=0
  yourTrials
  @Input() public parentData
   
  
  
  
  clickVerify(valueEntered) {
    this.noOfTries = this.noOfTries + 1
    if (this.valueEntered > this.original) {
      this.hasWon=false
    this.resultGuess = "you entered a higher one";
      
    } else if (this.valueEntered < this.original) {
      this.hasWon=false
    this.resultGuess =
      "you entered a lower one  " 
    } else {
      this.resultGuess = "Your Guess is correct"
      this.hasWon=true
      this.original= Math.floor((Math.random() * 10) + 1);
      this.yourTrials=this.noOfTries
    }
  }

  constructor() { 
  }

  ngOnInit() {
  }
  clickRestart(){
    this.valueEntered=null
    this.original= Math.floor((Math.random() * 10) + 1);
    this.resultGuess= "Please start guessing"
  this.hasWon=false
  this.noOfTries=null
  
  }
 
}
