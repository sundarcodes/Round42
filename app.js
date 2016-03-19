'use strict';

class Enemy{
  constructor(domElement){
    this.enemyDomElement=domElement;
  }
  move(direction){

  }
  destroy(){

  }
}

class Tanker{
  constructor(domElement){
    this.tankerDomElement=domElement;
    this.directionMapper={
      left:{position:"left",increment:false},
      right:{position:"left",increment:true}
    };
  }
  move(direction){
    var directionGuide=this.directionMapper[direction];
    var currentPosition=parseInt(this.tankerDomElement.css(directionGuide.position));
    if (directionGuide.increment){
      currentPosition+=20;
    }else{
      currentPosition-=20;
    }
    this.tankerDomElement.css(directionGuide.position,currentPosition+"px");
  }
  destroy(){

  }
  fire(){
    // Identify the current left postion of the tanker and fire from the mid point
    var leftPosition=parseInt(this.tankerDomElement.css('left'));
    var bottomPosition=parseInt(this.tankerDomElement.css('bottom'));
    // Create a new bullet
    var bullet=new Bullet(leftPosition,bottomPosition)
  }
}

class Bullet{
  constructor(leftPosition,bottomPosition){
    // Create a domElement named bullet
    this.bulletDomElement=$('<div/>');
    this.bulletDomElement.css("left",leftPosition+"px");
    this.bulletDomElement.css("bottom",bottomPosition+"px");
    this.bulletDomElement.addClass('bullet');
    this.bulletDomElement.appendTo('#tanker');
    // $('#tanker').appendTo();
    // this.bulletDomElement=domElement;
  }
  move(){

  }
}


class GameController{
  constructor(){

  }
  createEnemy(){

  }
  moveEnemy(){

  }
  checkBulletCollision(){

  }
  handleBulletCollision(){

  }
}


$(document).ready(function(){
  var tankerDom = $('#tanker');
  // Create tanker object
  var tankerObj = new Tanker(tankerDom);
  // Create GameController object
  var gameCtrl = new GameController();

  // Map Keyboard keys
  $(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        tankerObj.move("left");
        break;

        case 38: // up
        break;

        case 39: // right
        tankerObj.move("right");
        break;

        case 40: // down
        break;
        case 32: // spacebar
        console.log('space');
        tankerObj.fire();
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
});
