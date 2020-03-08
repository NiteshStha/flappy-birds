class Information {
  constructor(parent) {
    this.parent = parent;
    this.bestScore = localStorage.getItem('score').toString();
    this.currentLevel = this.getCurrentLevel();

    this.init();
  }

  /**
   * Initializes the informations of the game.
   */
  init = () => {
    // Left Panel
    this.info = document.createElement('div');
    this.info.style.position = 'absolute';
    this.info.style.left = '50px';
    this.info.style.top = '30%';
    this.info.style.transform = 'translateY(-30%)';
    this.info.style.width = '360px';
    this.info.style.height = '400px';
    this.info.style.backgroundColor = '#FFF384';
    this.info.style.borderRadius = '12px';
    this.info.style.boxShadow =
      '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)';
    this.parent.appendChild(this.info);

    this.heading = document.createElement('h2');
    this.heading.style.padding = '12px 20px';
    this.heading.style.fontStyle = 'italic';
    this.heading.style.textAlign = 'center';
    this.heading.innerHTML = 'Instructions:';
    this.info.appendChild(this.heading);

    this.list = document.createElement('ul');
    this.list.style.padding = '8px 38px';
    this.list.style.fontSize = '18px';
    this.info.appendChild(this.list);

    this.li_1 = document.createElement('li');
    this.li_1.style.margin = '8px 0px';
    this.li_1.style.textAlign = 'justify';
    this.li_1.innerHTML =
      'Press the <b>start</b> button or press the <b>enter or space</b> key to start the game.';
    this.list.appendChild(this.li_1);

    this.li_2 = document.createElement('li');
    this.li_2.style.margin = '8px 0px';
    this.li_2.style.textAlign = 'justify';
    this.li_2.innerHTML =
      'After pressing the start button, the game starts in <b>3 seconds.</b>';
    this.list.appendChild(this.li_2);

    this.li_3 = document.createElement('li');
    this.li_3.style.margin = '8px 0px';
    this.li_3.style.textAlign = 'justify';
    this.li_3.innerHTML =
      'The best score is stored in the local storage of the browser.';
    this.list.appendChild(this.li_3);

    this.li_4 = document.createElement('li');
    this.li_4.style.margin = '8px 0px';
    this.li_4.style.textAlign = 'justify';
    this.li_4.innerHTML =
      'You can change the game <b>difficulty</b>. (Default: Amateur)';
    this.list.appendChild(this.li_4);

    this.btns = document.createElement('div');
    this.btns.style.padding = '12px 20px';
    this.btns.style.display = 'flex';
    this.btns.style.justifyContent = 'space-between';
    this.info.appendChild(this.btns);

    this.easy = document.createElement('button');
    this.easy.id = 'easy';
    this.easy.innerHTML = 'Easy';
    this.easy.style.width = '75px';
    this.easy.style.height = '40px';
    this.easy.style.borderRadius = '8px';
    this.easy.style.backgroundColor = '#2E74D1';
    this.easy.style.color = '#fff';
    this.easy.style.border = 'none';
    this.easy.style.outline = 'none';
    this.easy.addEventListener('click', this.changeLevel);
    this.btns.appendChild(this.easy);

    this.amataur = document.createElement('button');
    this.amataur.id = 'amateur';
    this.amataur.innerHTML = 'Amateur';
    this.amataur.style.width = '75px';
    this.amataur.style.height = '40px';
    this.amataur.style.borderRadius = '8px';
    this.amataur.style.backgroundColor = '#2E74D1';
    this.amataur.style.color = '#fff';
    this.amataur.style.border = 'none';
    this.amataur.style.outline = 'none';
    this.amataur.addEventListener('click', this.changeLevel);
    this.btns.appendChild(this.amataur);

    this.pro = document.createElement('button');
    this.pro.id = 'pro';
    this.pro.innerHTML = 'Pro';
    this.pro.style.width = '75px';
    this.pro.style.height = '40px';
    this.pro.style.borderRadius = '8px';
    this.pro.style.backgroundColor = '#2E74D1';
    this.pro.style.color = '#fff';
    this.pro.style.border = 'none';
    this.pro.style.outline = 'none';
    this.pro.addEventListener('click', this.changeLevel);
    this.btns.appendChild(this.pro);

    this.god = document.createElement('button');
    this.god.id = 'god';
    this.god.innerHTML = 'God';
    this.god.style.width = '75px';
    this.god.style.height = '40px';
    this.god.style.borderRadius = '8px';
    this.god.style.backgroundColor = '#2E74D1';
    this.god.style.color = '#fff';
    this.god.style.border = 'none';
    this.god.style.outline = 'none';
    this.god.addEventListener('click', this.changeLevel);
    this.btns.appendChild(this.god);

    this.level = document.createElement('h3');
    this.level.style.margin = '8px 0px';
    this.level.style.padding = '12px 20px';
    this.level.style.textAlign = 'center';
    this.level.style.textTransform = 'capitalize';
    this.level.innerHTML = `Level: ${this.currentLevel}`;
    this.info.appendChild(this.level);

    // Right Panel
    this.board = document.createElement('div');
    this.board.style.position = 'absolute';
    this.board.style.right = '50px';
    this.board.style.top = '30%';
    this.board.style.transform = 'translateY(-30%)';
    this.board.style.width = '360px';
    this.board.style.height = '400px';
    this.board.style.backgroundColor = '#FFF384';
    this.board.style.borderRadius = '12px';
    this.board.style.boxShadow =
      '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)';
    this.parent.appendChild(this.board);

    this.bheading = document.createElement('h2');
    this.bheading.style.padding = '12px 20px';
    this.bheading.style.fontStyle = 'italic';
    this.bheading.style.textAlign = 'center';
    this.bheading.innerHTML = 'Leader Board:';
    this.board.appendChild(this.bheading);

    this.bestScoreDiv = document.createElement('div');
    this.bestScoreDiv.style.position = 'absolute';
    this.bestScoreDiv.style.left = '50%';
    this.bestScoreDiv.style.top = '20%';
    this.bestScoreDiv.style.transform = 'translate(-50%, -20%)';
    this.board.appendChild(this.bestScoreDiv);

    // Loop through each digits of the number and append it to the DOM.
    for (let i = 0; i < this.bestScore.length; i++) {
      const digit = this.bestScore[i];
      const numSprite = document.createElement('div');
      numSprite.style.display = 'inline-block';
      numSprite.style.backgroundImage = NUMBERS[digit];
      numSprite.style.backgroundRepeat = 'no-repeat';
      numSprite.style.width = `${NUMBER_SPRITE_DIMENSIONS.width}px`;
      numSprite.style.height = `${NUMBER_SPRITE_DIMENSIONS.height}px`;
      this.bestScoreDiv.appendChild(numSprite);
    }
  };

  /**
   * Returns the current level of the game.
   * @returns Returns a string value as the level of the game.
   */
  getCurrentLevel = () => {
    switch (GAME_FPS) {
      case 60:
        return 'easy';

      case 100:
        return 'amateur';

      case 120:
        return 'pro';

      case 144:
        return 'god';
    }
  };

  /**
   * Sets the current level of the game in the DOM element.
   */
  setLevel = () => {
    this.level.innerHTML = `Level: ${this.currentLevel}`;
  };

  /**
   * Changes the level of the game. Increase the game speed and the pipe generation gap.
   */
  changeLevel = event => {
    switch (event.target.id) {
      case 'easy':
        GAME_FPS = FPS.easy;
        PIPE_GAP = PIPE_GAP_LEVEL.easy;
        this.currentLevel = this.getCurrentLevel();
        this.setLevel();
        break;

      case 'amateur':
        GAME_FPS = FPS.amateur;
        PIPE_GAP = PIPE_GAP_LEVEL.amateur;
        this.currentLevel = this.getCurrentLevel();
        this.setLevel();
        break;

      case 'pro':
        GAME_FPS = FPS.pro;
        PIPE_GAP = PIPE_GAP_LEVEL.pro;
        this.currentLevel = this.getCurrentLevel();
        this.setLevel();
        break;

      case 'god':
        GAME_FPS = FPS.god;
        PIPE_GAP = PIPE_GAP_LEVEL.god;
        this.currentLevel = this.getCurrentLevel();
        this.setLevel();
        break;

      default:
        GAME_FPS = FPS.amateur;
        PIPE_GAP = PIPE_GAP_LEVEL.amateur;
        this.currentLevel = this.getCurrentLevel();
        this.setLevel();
    }
  };
}
