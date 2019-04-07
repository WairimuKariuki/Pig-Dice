//Business Logic
var player1="";
var player2="";

var throwdice =function () {
  return Math.floor(6*Math.random())+1
}
function Player(turn) {
   this.roll = 0;
   this.turnscore = 0;
   this.totalscore = 0;
   this.turn = turn;
   this.playerName;
 }
//checking for 1
Player.prototype.rollone = function () {
  if (this.roll===1) {
    this.turnscore = 0;
    alert("Lo Siento" + this.playerName + ",You rolled a 1! Your turn is over!")
    //this.changeturn(;
  } else {
    this.turnscore += this.roll;
  }
}
//hold
Player.protoytpe.hold = function(){
  this.totalscore += this.turnscore;
  this.turnscore = 0;
  //this.changeturn();
  alert(this.playerName + ",Your turn is over,please pass the dice");
}
