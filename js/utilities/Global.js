// View
const VIEW_WIDTH = 288;
const VIEW_HEIGHT = 624;
const SCENE_HEIGHT = 512;
const GROUND_HEIGHT = 112;
const BACKGROUND_SPEED = 0.6;

// Pipe
const PIPE_WIDTH = 52;
const PIPE_MIN_HEIGHT = 100;
const PIPE_MAX_HEIGHT = 320;

const GAP = 120;
const PIPE_GAP = 180;

// Bird
const BIRD_WIDTH = 34;
const BIRD_HEIGHT = 24;
const BIRD_X = 20;
const BIRD_Y = SCENE_HEIGHT / 2 - BIRD_HEIGHT / 2;
const SPEED = 0;
const GRAVITY = 0.2;
const JUMP = 4.4;

// Level
const FPS = {
  easy: 60,
  amateur: 100,
  pro: 120,
  god: 144
};

// Other
const SCORE_WIDTH = 36;
const KEYCODE_SPACE = 32;
const KEYCODE_ENTER = 13;
let GAME_FPS = FPS.amateur;
