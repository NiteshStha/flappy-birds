class Pipe {
  constructor(parent) {
    this.width = PIPE_WIDTH;
    this.topHeight = getRandomHeight(PIPE_MIN_HEIGHT, getTopPipeMaxHeight());
    this.bottomHeight = getBottomPipeHeight(this.topHeight);
    this.x = VIEW_WIDTH + 5;
    this.parent = parent;

    this.init();
  }

  init = () => {
    this.pipeTop = document.createElement('div');
    this.pipeTop.style.backgroundImage = 'url(assets/sprites/pipe-green.png)';
    this.pipeTop.style.backgroundRepeat = 'no-repeat';
    this.pipeTop.style.backgroundSize = '100%';
    this.pipeTop.style.transform = 'rotate(180deg)';
    this.pipeTop.style.position = 'absolute';
    this.pipeTop.style.width = `${this.width}px`;
    this.pipeTop.style.height = `${this.topHeight}px`;
    this.pipeTop.style.top = '0px';
    this.pipeTop.style.left = `${this.x}px`;

    this.pipeBottom = document.createElement('div');
    this.pipeBottom.style.backgroundImage =
      'url(assets/sprites/pipe-green.png)';
    this.pipeBottom.style.backgroundRepeat = 'no-repeat';
    this.pipeBottom.style.backgroundSize = '100%';
    this.pipeBottom.style.position = 'absolute';
    this.pipeBottom.style.width = `${this.width}px`;
    this.pipeBottom.style.height = `${this.bottomHeight}px`;
    this.pipeBottom.style.top = `${SCENE_HEIGHT - this.bottomHeight}px`;
    this.pipeBottom.style.left = `${this.x}px`;

    this.parent.appendChild(this.pipeTop);
    this.parent.appendChild(this.pipeBottom);
  };

  /**
   * Moves the pipes towards the left.
   * @param {Object} game The instance of the game.
   */
  move = game => {
    if (this.x <= 0 - this.width) {
      this.parent.removeChild(this.pipeTop);
      this.parent.removeChild(this.pipeBottom);

      // Remove the pipe from the array of pipes
      game.pipes = game.pipes.filter(pipe => pipe.x !== 0 - pipe.width);
    }
    this.x--;
    this._draw();
  };

  /**
   * Draws the pipes in the game.
   * Donot not explicitly call this method as it is a private method.
   */
  _draw = () => {
    this.pipeTop.style.left = `${this.x}px`;
    this.pipeBottom.style.left = `${this.x}px`;
  };
}
