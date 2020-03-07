class Background {
  constructor(width, height, sceneHeight, groundHeight) {
    this.width = VIEW_WIDTH;
    this.height = VIEW_HEIGHT;
    this.sceneHeight = SCENE_HEIGHT;
    this.groundHeight = GROUND_HEIGHT;
    this.x = 0;
    this.speed = BACKGROUND_SPEED;

    this.init();
  }

  /**
   * Setting the background styles and adding background images
   */
  init = () => {
    this.container = document.createElement('div');
    this.container.className = 'container';
    document.body.appendChild(this.container);

    this.view = document.createElement('div');
    this.view.style.width = `${this.width}px`;
    this.view.style.height = `${this.height}px`;
    this.view.style.position = 'relative';
    this.view.style.zIndex = '100';
    this.view.style.overflow = 'hidden';
    this.view.style.boxShadow =
      '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)';
    this.container.appendChild(this.view);

    this.scene = document.createElement('div');
    this.scene.style.backgroundImage =
      'url(../assets/sprites/background-day.png)';
    this.scene.style.height = `${this.sceneHeight}px`;
    this.scene.style.backgroundPositionX = `${this.x}px`;
    this.view.appendChild(this.scene);

    this.ground = document.createElement('div');
    this.ground.style.backgroundImage = 'url(../assets/sprites/base.png)';
    this.ground.style.height = `${this.groundHeight}px`;
    this.ground.style.backgroundPositionX = `${this.x}px`;
    this.view.appendChild(this.ground);
  };

  /**
   * Moves the background image of the game
   */
  move = () => {
    if (this.x <= -this.width) {
      this.x = 0;
    }
    this.x -= this.speed;
    this._draw();
  };

  /**
   * Draws the background of the game
   */
  _draw = () => {
    this.scene.style.backgroundPositionX = `${this.x}px`;
    this.ground.style.backgroundPositionX = `${this.x}px`;
  };
}
