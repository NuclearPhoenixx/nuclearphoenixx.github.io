/* Some random javascript crap for the website. */

// INIT
let now = new Date(), year = now.getFullYear();
let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// SNOW IN WINTER - ONLY DESKTOP?
//if(width>=1800 && (now.getMonth()==0 || now.getMonth()==1 || now.getMonth()==11)){
if ( width >= 1600 && (now.getMonth() == 0 || now.getMonth() == 1 || now.getMonth() == 11) ) {
  new Snowflakes({
    color: '#66ccff', // Default: "#5ECDEF"
    count: 15, // 100 snowflakes. Default: 50
    minOpacity: 0.2, // From 0 to 1. Default: 0.6
    maxOpacity: 0.6, // From 0 to 1. Default: 1
    minSize: 5, // Default: 10
    maxSize: 30, // Default: 25
    speed: 2, // The property affects the speed of falling. Default: 1
  });
}

const ele = document.getElementById('extra');

if (ele) {
  // APRIL FOOLS DAY
  if (now.getMonth() == 3 && now.getDate() == 1) {
    ele.textContent = 'Watch out, it\'s april fools day! ;)';
  }

  // HALLOWEEN
  if (now.getMonth() == 9 && now.getDate() == 31) {
    ele.textContent = 'Turn on the bright lights! Don\'t get spooked today.';
  }

  // CHRISTMAS
  if (now.getMonth() == 11 && (now.getDate() == 24 || now.getDate() == 25)) {
    ele.textContent = 'I wish you a Merry Christmas and happy holidays!';
  }

  // NEW YEAR
  if (now.getMonth() == 0 && now.getDate() == 1) {
    ele.textContent = `I wish you a happy and successful new year ${year}!`;
  }
}
