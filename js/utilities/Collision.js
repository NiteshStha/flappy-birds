/**
 * Resets the game.
 * @param {Object} game The instance of the game object.
 */
const _clearGame = game => {
  const { interval, sounds, score, reset, init } = game;
  clearInterval(interval);
  sounds.hit.play();
  score.update();
  setTimeout(() => {
    reset();
    menu.init();
  }, 2000);
};

/**
 * Dectects any collision in the game.
 * @param {Object} game The instance of the game object.
 */
const CollisionDetection = game => {
  const { pipes, bird, interval, sounds, score } = game;

  if (bird.y + bird.height >= SCENE_HEIGHT || bird.y <= 0) {
    _clearGame(game);
  }

  for (let i = 0; i < pipes.length; i++) {
    if (
      pipes[i].x <= bird.x + bird.width &&
      (bird.y <= pipes[i].topHeight ||
        bird.y + bird.height >= SCENE_HEIGHT - pipes[i].bottomHeight)
    ) {
      _clearGame(game);
    } else if (pipes[i].x + bird.width === bird.x) {
      sounds.point.play();
      score.add();
    }
  }
};
