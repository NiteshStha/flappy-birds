class Score {
  constructor(parent) {
    this.parent = parent;
    this.score = 0;

    this.init();
  }

  init = () => {
    this.scoreBoard = document.createElement('div');
    this.scoreBoard.style.position = 'absolute';
    this.scoreBoard.innerHTML = `Score: ${this.score}`;
    this.scoreBoard.style.top = '4px';
    this.scoreBoard.style.right = '10px';
    this.scoreBoard.style.margin = '0 auto';
    this.scoreBoard.style.zIndex = '100';
    this.scoreBoard.style.color = '#fffdd0';

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
    this.scoreBoard.innerHTML = `Score: ${this.score}`;
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
