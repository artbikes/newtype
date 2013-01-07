function Word(word,x,y) {
	this.word = word;
	this.x = x;
	this.y = y;
};

Word.prototype.draw = function(context) {
	context.font = "bold 24px sans-serif";
	context.fillText(this.word, this.x, this.y);
};

Word.prototype.update = function(word,letter) {
	if(Game.entities.slice(-1)[0].word == Game.entities[targetWord].word)
	{
		baseY = baseY + 30;
		Game.addWord("",baseX,baseY);
		targetWord++;
	}
};
