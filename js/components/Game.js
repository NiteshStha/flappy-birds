class Game {
  constructor() {
    this.init();
  }

  init = () => {
    this.pipes = [];
    this.space = 0;
    this.pipeGap = PIPE_GAP;
    this.background = new Background();
    this.info = new Information(this.background.container);
    this.sounds = {
      point: new Sound('./assets/audio/point.wav'),
      hit: new Sound('./assets/audio/hit.wav')
    };
    this.bird = new Bird(this.background.scene, this.sounds.flap);
    this.score = new Score(this.background.scene);

    setTimeout(() => {
      this.interval = setInterval(this.animate, 1000 / GAME_FPS);
    }, 2000);
  };

  /**
   * Animates the entire game i.e. gameloop.
   */
  animate = () => {
    // Move the background
    this.background.move();

    // Create pipes and move them
    console.log(this.pipeGap);
    if (this.space >= this.pipeGap) {
      const pipe = new Pipe(this.background.scene);
      this.pipes.push(pipe);
      this.space = 0;
    }
    this.space++;
    for (var i = 0; i < this.pipes.length; i++) {
      this.pipes[i].move(this);
    }

    // Move the bird
    this.bird.move();

    // Collision Detection
    CollisionDetection(this);

    // Draw the Score in the game
    this.score.draw();
  };

  /**
   * Resets the game.
   */
  reset = () => {
    document.removeEventListener('keydown', this.bird._fly);
    this.sounds.hit.remove();
    this.sounds.point.remove();
    document.body.removeChild(this.background.container);
  };
}
