var Game = {};

Game.fps = 50;

Game.initialize = function() {
  this.entities = [];
  this.context = document.getElementById("viewport").getContext("2d");
	this.startTime = (new Date).getTime();
	this.endTime = 0;
};

Game.draw = function() {
  this.context.clearRect(0, 0, 640, 480);
	if(!running)
	{
		this.context.fillStyle = 'rgba(0,0,0,0.8)';
		this.context.fillRect(0, 0, 640, 480);
		if(this.endTime != 0)
		{
			this.context.fillStyle = '#f00';
			this.context.fillText('WPM: ' + this.wpm,400,100); 
			this.context.fillStyle = 'rgba(0,0,0,0.8)';
		}
	}
  for (var i=0; i < this.entities.length; i++) {
    this.entities[i].draw(this.context);
  }
};

Game.update = function() {
  for (var i=0; i < this.entities.length; i++) {
    this.entities[i].update();
  }
	if(targetWord == 8)
		Game.over();
};

Game.addWord = function(word,x,y) {
	Game.entities.push(new Word(word,x,y));
};

Game.over = function () {
	if(running)
	{
		this.endTime = (new Date).getTime();
		Game.score(this.endTime);
	}
	running = false;
};

Game.score = function (time) {
	this.wpm = words.length/((time - this.startTime)*(1/60000));
};
