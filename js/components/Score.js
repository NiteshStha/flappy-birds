class Score {
  constructor(parent) {
    this.parent = parent;
    this.score = 0;

    this.init();
  }

  init = () => {
    this.scoreBoard = document.createElement('div');
    this.scoreBoard.style.position = 'absolute';
    this.scoreBoard.style.top = '12px';
    this.scoreBoard.style.left = '50%';
    this.scoreBoard.style.transform = 'translateX(-50%)';

    this.scoreBoard.style.zIndex = '200';

    this.parent.appendChild(this.scoreBoard);
  };

  /**
   * Increments the value of the score by 1.
   */
  add = () => {
    this.score++;
  };

  /**
   * Draws the score board in the game.
   */
  draw = () => {
    this.scoreStr = this.score.toString();
    // To clear the last score value from the DOM.
    this.scoreBoard.innerHTML = '';

    for (let i = 0; i < this.scoreStr.length; i++) {
      const digit = this.scoreStr[i];
      const numSprite = document.createElement('div');
      numSprite.style.display = 'inline-block';
      numSprite.style.backgroundImage = NUMBERS[digit];
      numSprite.style.backgroundRepeat = 'no-repeat';
      numSprite.style.width = `${NUMBER_SPRITE_DIMENSIONS.width}px`;
      numSprite.style.height = `${NUMBER_SPRITE_DIMENSIONS.height}px`;
      this.scoreBoard.appendChild(numSprite);
    }
    // this.scoreBoard.innerHTML = `Score: ${this.score}`;
  };

  /**
   * Updates the best score if the current score is the best in the localstorage.
   */
  update = () => {
    if (this.score > localStorage.getItem('score'))
      localStorage.setItem('score', this.score);
  };

  /**
   * Resets the score.
   */
  reset = () => {
    this.score = 0;
  };
}
