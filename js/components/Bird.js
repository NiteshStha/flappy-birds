class Bird {
  constructor(parent) {
    this.parent = parent;
    this.width = BIRD_WIDTH;
    this.height = BIRD_HEIGHT;
    this.x = BIRD_X;
    this.y = BIRD_Y;
    this.speed = SPEED;
    this.gravity = GRAVITY;
    this.jump = JUMP;
    this.jumpKey = KEYCODE_SPACE;
    this.angle = 0;

    this.init();
  }

  init = () => {
    this.birdEl = document.createElement('div');
    this.birdEl.style.backgroundImage =
      'url(assets/sprites/bluebird-midflap.png)';
    this.birdEl.style.width = `${this.width}px`;
    this.birdEl.style.height = `${this.height}px`;
    this.birdEl.style.position = 'absolute';
    this.birdEl.style.top = `${this.y}px`;
    this.birdEl.style.left = `${this.x}px`;
    window.addEventListener('keydown', this._fly);

    this.parent.appendChild(this.birdEl);
  };

  /**
   * Move the bird towards the ground i.e. falling
   */
  move = () => {
    this._gravityEffect();
    this.y += this.speed;
    this.angle += 1.7;

    // To limit the bird face downward to only 90 degree.
    if (this.angle >= 90) {
      this.angle = 90;
    }
    this._draw();
  };

  /**
   * Provides the gravity effect to the bird.
   * Donot not explicitly call this method as it is a private method.
   */
  _gravityEffect = () => {
    this.speed += this.gravity;
  };

  /**
   * Draws the bird in the game.
   * Donot not explicitly call this method as it is a private method.
   */
  _draw = () => {
    this.birdEl.style.top = `${this.y}px`;
    this.birdEl.style.left = `${this.x}px`;

    this.birdEl.style.transform = `rotate(${this.angle}deg)`;
  };

  /**
   * The event handler for the bird.
   * Donot not explicitly call this method as it is a private method.
   */
  _fly = event => {
    if (event.keyCode === this.jumpKey) {
      this.angle = -45;
      this.speed = -this.jump;
    }
  };
}
