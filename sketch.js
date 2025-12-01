let spriteSheet;
let frameWidth;
const numFrames = 9;

function preload() {
  // 載入圖片精靈檔案
  // 請確保 '1/stop/stop-all.png' 路徑相對於 index.html 是正確的
  spriteSheet = loadImage('1/stop/stop-all.png');
}

function setup() {
  // 建立一個全螢幕的畫布
  createCanvas(windowWidth, windowHeight);
  
  // 計算單一畫格的寬度
  // 圖片總寬 1246px / 9張圖
  frameWidth = spriteSheet.width / numFrames;
}

function draw() {
  // 設定背景為淡綠色
  background(220, 255, 220);

  // 計算當前要顯示的畫格索引 (0-8)
  // frameCount / 5 是為了讓動畫變慢，每5個畫格更新一次動畫
  let currentFrame = floor(frameCount / 5) % numFrames;

  // 在畫布中央繪製目前的動畫畫格
  // image(img, dx, dy, dWidth, dHeight, sx, sy, sWidth, sHeight)
  image(spriteSheet, width / 2 - frameWidth / 2, height / 2 - spriteSheet.height / 2, frameWidth, spriteSheet.height, currentFrame * frameWidth, 0, frameWidth, spriteSheet.height);
}
