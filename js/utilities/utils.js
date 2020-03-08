/**
 * Gets the minimum and maximum height value and returns a random height in between.
 * @param {number} min The minimum height.
 * @param {number} max The maximum height.
 * @returns returns a random height value.
 */
const getRandomHeight = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

/**
 * Calculates the maximum height for the top pipe.
 * @returns returns the height value.
 */
const getTopPipeMaxHeight = () => {
  return SCENE_HEIGHT - PIPE_MIN_HEIGHT - GAP;
};

/**
 * Calculates the height of the bottom pipe.
 * @param {number} topHeight The top pipe height.
 * @returns returns the height value.
 */
const getBottomPipeHeight = topHeight => {
  return SCENE_HEIGHT - topHeight - GAP;
};

/**
 * Generates the reverse value of the provided number.
 * @param {number} num The number value that is to be reversed.
 * @returns returns the reversed number value.
 */
const reverseNumber = num => {
  let rev = 0;
  while (num !== 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev;
};
