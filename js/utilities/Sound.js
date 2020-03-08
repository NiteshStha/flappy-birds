class Sound {
  constructor(src) {
    this.sound = document.createElement('audio');
    this.sound.src = src;
    this.sound.setAttribute('preload', 'auto');
    this.sound.setAttribute('controls', 'none');
    this.sound.style.display = 'none';
    document.body.appendChild(this.sound);
  }

  /**
   * Plays the sound.
   */
  play = () => {
    this.sound.play();
  };

  /**
   * Stops the sound.
   */
  stop = () => {
    this.sound.pause();
  };

  /**
   * Removes the sound.
   */
  remove = () => {
    document.body.removeChild(this.sound);
  };
}
